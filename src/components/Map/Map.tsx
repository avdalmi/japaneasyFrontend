import React, { useState } from "react";
// import { selectPrefectures } from "../../store/prefectures/slice";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { useAppSelector } from "../../hooks";
import { selectPrefectures } from "../../store/prefectures/slice";
import { japanData } from "./Data";
import { OnClick } from "../../types/EventListener";
import Carousel from "react-bootstrap/Carousel";

const center = [37.7608, 140.4748];

export default function Map() {
  const prefectures = useAppSelector(selectPrefectures);
  // console.log("prefectures", prefectures);

  const [showPopUp, setShowPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer
        //@ts-ignore
        center={center}
        zoom={5.5}
        style={{ width: "90vw", height: "90vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=v4T1pdLNYtqXIQR4IOYC"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {japanData.features.map((pref) => {
          const coordinates = pref.geometry.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);

          return (
            <Polygon
              key={pref.properties.id}
              pathOptions={{
                fillColor: "#FD8D3C",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                //@ts-ignore
                dashArray: 3,
                color: "white",
              }}
              //@ts-ignore
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    dashArray: "",
                    fillColor: "#BD0026",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    color: "white",
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                    fillColor: "#FD8D3C",
                  });
                },
                click: (e) => {
                  prefectures.map((prefs) => {
                    // console.log("namee", pref.properties.nam);
                    // console.log("prefs title", prefs.image);

                    if (prefs.title.split(" ")[0] === pref.properties.nam) {
                      // const arrayImages = [];
                      setTitle(prefs.title);
                      setDescription(prefs.description);
                      // console.log("imagesss", prefs.image);
                      //@ts-ignore
                      setImages(prefs.image);
                      //@ts-ignore
                      // setImages(arrayImages);
                      // setImages(prefs.image);
                      setShowPopUp(true);
                      // console.log("array", arrayImages);
                    }
                  });
                },
              }}
            />
          );
        })}

        {showPopUp && (
          <div
            style={{
              position: "absolute",
              zIndex: "400",
              top: "10%",
              left: "10%",
              width: "600px",
              height: "600px",
              backgroundColor: "white",
            }}
          >
            {" "}
            <button onClick={(e: OnClick) => setShowPopUp(false)}>close</button>
            <h1>{title}</h1>
            <p>{description}</p>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  //@ts-ignore
                  src={images[0]}
                  alt="first slide"
                  style={{ maxHeight: "350px" }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  //@ts-ignore
                  src={images[1]}
                  alt="first slide"
                  style={{ maxHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  //@ts-ignore
                  src={images[2]}
                  alt="first slide"
                  style={{ maxHeight: "350px" }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  //@ts-ignore
                  src={images[3]}
                  alt="first slide"
                  style={{ maxHeight: "350px" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>
        )}
      </MapContainer>
    </div>
  );
}

/* {prefectures.map((pref) => {
        const parsedLong = parseInt(pref.long);
        const parsedLat = parseInt(pref.lat);
        return (
          <Marker position={[parsedLong, parsedLat]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })} */

// export default Map;

// const options = {
//   region: "JP",
//   colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
//   backgroundColor: "#81d4fa",
//   //datalessRegionColor: "#3794ff",
//   //defaultColor: '#f5f5f5',
//   displayMode: "regions",
//   resolution: "provinces",
// };

// // function Map() {
// //   const prefectures = useAppSelector(selectPrefectures);
// //   //   console.log("prefectures", prefectures);

// //   //   const data = [
// //   //     ["Prefecture", "Description", "Image"],

// //   //     ["Hokkaido", 200, 800],
// //   //   ];

// //   //   console.log("data", data);

// //   const array = [["Prefecture", "Description"]];
// //   prefectures.map((pref) =>
// //     array.push([pref.title.split(" ")[0], pref.description])
// //   );

// //   //   console.log("titles", array);
// //   const data = array;

// //   const chartEvent = [
// //     [
// //       {
// //         eventName: "select",
// //         //@ts-ignore
// //         callback: ({ chartWrapper }) => {
// //           const chart = chartWrapper.getChart();
// //           const selection = chart.getSelection();
// //           if (selection.length === 0) return;
// //           const region = data[selection[0].row + 1];
// //           console.log("Selected : " + region);
// //         },
// //       },
// //     ],
// //   ];
// //   return (
// //     <Chart
// //       //   style={{ width: "100%", height: "1000px" }}
// //       //@ts-ignore
// //       chartEvents={chartEvent}
// //       chartType="GeoChart"
// //       width="100%"
// //       height="100%"
// //       data={data}
// //       options={options}
// //     />
// //   );
// // }

// // export default Map;
