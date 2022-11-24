import React, { useState } from "react";
// import { selectPrefectures } from "../../store/prefectures/slice";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { useAppSelector } from "../../hooks";
import { selectPrefectures } from "../../store/prefectures/slice";
import { japanData } from "./Data";
import { OnClick } from "../../types/EventListener";
import Carousel from "react-bootstrap/Carousel";
import Loading from "../Loading/Loading";

const center = [37.7608, 140.4748];

export default function Map() {
  const prefectures = useAppSelector(selectPrefectures);

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
                    if (prefs.title.split(" ")[0] === pref.properties.nam) {
                      setTitle(prefs.title);
                      setDescription(prefs.description);
                      //@ts-ignore
                      setImages(prefs.image);
                      setShowPopUp(true);
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
            {!images ? (
              <Loading />
            ) : (
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
            )}
          </div>
        )}
      </MapContainer>
    </div>
  );
}
