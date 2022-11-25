import React, { useState } from "react";
// import { selectPrefectures } from "../../store/prefectures/slice";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { useAppSelector } from "../../hooks";
import { selectPrefectures } from "../../store/prefectures/slice";
import { japanData } from "./Data";
import { OnClick } from "../../types/EventListener";
import Carousel from "react-bootstrap/Carousel";
import Loading from "../Loading/Loading";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import { RecipeState } from "../../store/recipes/slice";
import { Link } from "react-router-dom";
import PrefecturePolygons from "../PrefecturePolygons/PrefecturePolygons";

export default function Map() {
  const prefectures = useAppSelector(selectPrefectures);

  // console.log("pref", prefectures);
  const [showPopUp, setShowPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState();
  const [recipe, setRecipe] = useState<any>();

  // console.log("recipe", recipe);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer
        center={[37.7608, 140.4748]}
        zoom={5.5}
        style={{ width: "90vw", height: "90vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=v4T1pdLNYtqXIQR4IOYC"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <PrefecturePolygons />
        {/* {japanData.features.map((pref) => {
          // console.log("pref", pref);
          const coordinates = pref.geometry.coordinates[0].map((item: any) => {
            console.log("items", item[1], item[0]);
            //   [

            //   item[1],
            //   item[0],
            // ];
          });
          //  {geodata.features.map((pref) => {
          //         //@ts-ignore
          //         // console.log("pref", pref.geometry.coordinates);
          //         //@ts-ignore
          //         const coordinates = pref.geometry.coordinates[0].map(
          //           (item: any) => {
          //             // console.log(item);
          //             if (item.length <= 2) {
          //               //   console.log("items", item[1], item[0])
          //               return [item[1], item[0]];
          //             } else {
          //               item.map((i: any) => {
          //                 // console.log("i", i[1], i[0]);
          //                 return [i[1], i[0]];
          //               });
          //             }
          //           }
          //           //   [
          //           //   console.log("items", item[1], item[2]),
          //           //   //   item[1],
          //           //   //   item[0],
          //           // ]
          //         );
          return (
            <Polygon
              key={pref.properties.id}
              pathOptions={{
                fillColor: "#FD8D3C",
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,

                dashArray: "3",
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
                  // prefectures.map((prefs) => {
                  //   if (prefs.title.split(" ")[0] === pref.properties.nam) {
                  //     setTitle(prefs.title);
                  //     setDescription(prefs.description);
                  //     //@ts-ignore
                  //     setImages(prefs.image);
                  //     setShowPopUp(true);
                  //     setRecipe(prefs.recipes);
                  //   }
                  // });
                },
              }}
            />
          );
        })} */}
      </MapContainer>
    </div>
  );
}

// {
//   !images ? (
//     <Loading />
//   ) : (
//     <Modal
//       size="lg"
//       show={showPopUp}
//       onHide={() => setShowPopUp(false)}
//       aria-labelledby="example-modal-sizes-title-lg"
//     >
// <Modal.Header closeButton>
//   <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
// </Modal.Header>
// {/* @ts-ignore */}
// <Modal.Body>
//   {description}
//   <Carousel>
//     <Carousel.Item>
//       <Image
//         className="d-block w-100"
//         //@ts-ignore
//         src={images[0]}
//         alt="first slide"
//         style={{
//           maxHeight: "300px",
//           maxWidth: "500px",
//           margin: "auto",
//         }}
//       />
//     </Carousel.Item>

//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         //@ts-ignore
//         src={images[1]}
//         alt="first slide"
//         style={{
//           maxHeight: "300px",
//           maxWidth: "500px",
//           margin: "auto",
//         }}
//       />
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         //@ts-ignore
//         src={images[2]}
//         alt="first slide"
//         style={{
//           maxHeight: "300px",
//           maxWidth: "500px",
//           margin: "auto",
//         }}
//       />
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         //@ts-ignore
//         src={images[3]}
//         alt="first slide"
//         style={{
//           maxHeight: "300px",
//           maxWidth: "500px",
//           margin: "auto",
//           borderRadius: "5px",
//         }}
//       />
//     </Carousel.Item>
//   </Carousel>
//   {recipe.map((rec: RecipeState) => {
//     return (
//       <Accordion key={rec.id}>
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>{rec.name}</Accordion.Header>
//           <Accordion.Body>
//             <img
//               src={rec.image}
//               alt={rec.name}
//               style={{ width: "200px" }}
//             />
//             <p>difficulty: {rec.difficulty}</p>
//             <p>{rec.rating}</p>
//             <p>{rec.time}</p>
//             <p>{rec.description.substring(0, 650)}</p>
//             <Link to={`/recipes/${rec.id}`}>
//               <Button>Go to recipe</Button>
//             </Link>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     );
//   })}
// </Modal.Body>
//     </Modal>
//   );
// }
