import { useMap, GeoJSON } from "react-leaflet";

// import { japanData } from "../Map/Data";
import prefectures from "../Map/prefectures.json";
import { useEffect } from "react";
import { Polygon } from "react-leaflet";
//@ts-ignore
import features from "../Map/prefectures.json";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  PrefectureState,
  selectPrefectures,
} from "../../store/prefectures/slice";
import { useAppSelector } from "../../hooks";
import Loading from "../Loading/Loading";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import { RecipeState } from "../../store/recipes/slice";
import { Link } from "react-router-dom";

const PrefecturePolygons = () => {
  const selectedPrefectures = useAppSelector(selectPrefectures);
  const [showPopUp, setShowPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState();
  const [recipe, setRecipe] = useState<any>();
  const [selectedName, setSelectedName] = useState("");

  //   console.log("bao", selectedPrefectures);
  //   console.log("alexct", selectedPrefectures);
  //   const pop = () => {
  //     <Modal>
  //       <Modal.Header closeButton>
  //         <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
  //       </Modal.Header>
  //       {/* @ts-ignore */}
  //       <Modal.Body>
  //         {description}
  //         <Carousel>
  //           <Carousel.Item>
  //             <Image
  //               className="d-block w-100"
  //               //@ts-ignore
  //               src={images[0]}
  //               alt="first slide"
  //               style={{
  //                 maxHeight: "300px",
  //                 maxWidth: "500px",
  //                 margin: "auto",
  //               }}
  //             />
  //           </Carousel.Item>

  //           <Carousel.Item>
  //             <img
  //               className="d-block w-100"
  //               //@ts-ignore
  //               src={images[1]}
  //               alt="first slide"
  //               style={{
  //                 maxHeight: "300px",
  //                 maxWidth: "500px",
  //                 margin: "auto",
  //               }}
  //             />
  //           </Carousel.Item>
  //           <Carousel.Item>
  //             <img
  //               className="d-block w-100"
  //               //@ts-ignore
  //               src={images[2]}
  //               alt="first slide"
  //               style={{
  //                 maxHeight: "300px",
  //                 maxWidth: "500px",
  //                 margin: "auto",
  //               }}
  //             />
  //           </Carousel.Item>
  //           <Carousel.Item>
  //             <img
  //               className="d-block w-100"
  //               //@ts-ignore
  //               src={images[3]}
  //               alt="first slide"
  //               style={{
  //                 maxHeight: "300px",
  //                 maxWidth: "500px",
  //                 margin: "auto",
  //                 borderRadius: "5px",
  //               }}
  //             />
  //           </Carousel.Item>
  //         </Carousel>
  //       </Modal.Body>
  //     </Modal>;
  //   };
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  //   export const getAllPrefectures =
  //     () => async (dispatch: AppDispatch, getState: () => RootState) => {
  //       try {
  //         const response = await axios.get(`${apiUrl}/prefectures`);
  //         //   console.log("response", response);
  //         //   dispatch(fetchAllRecipes(response.data.recipes));
  //         dispatch(fetchAllPrefectures(response.data.prefectures));
  //       } catch (e) {
  //         if (e instanceof Error) console.log("error message", e.message);
  //       }
  //     };

  const lookupGeoPrefName = () => {
    selectedPrefectures.map((prefs: PrefectureState) => {
      if (prefs.title.split("")[0] === selectedName) {
        console.log("match", prefs);
      }
    });
  };

  const setPrefectureState = (prefs: PrefectureState) => {
    setTitle(prefs.title);
    setDescription(prefs.description);
    //@ts-ignore
    setImages(prefs.image);
    setRecipe(prefs.recipes);
  };

  //@ts-ignore
  const geodata: GeoJSON.FeatureCollection = new L.GeoJSON(prefectures, {
    //@ts-ignore

    onEachFeature: (feature = {}, layer) => {
      layer.on({
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
          setSelectedName(e.target.feature.properties.nam);
        },
      });
      //@ts-ignore
      layer.bindPopup(`<div>${title}</div>`);
    },
  });

  const map = useMap();

  useEffect(() => {
    //@ts-ignore
    geodata.addTo(map);
  }, []);

  //   console.log("selected name", selectedName);
  return <></>;
};

export default PrefecturePolygons;
