import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { useAppSelector } from "../../hooks";
import { selectPrefectures } from "../../store/prefectures/slice";
import { japanData } from "./Data";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { RecipeState } from "../../types/Recipes";
import { PrefectureImage, PrefectureState } from "../../types/Prefectures";
import { Coordinates, MapCenter } from "../../types/Maps";
import Rating from "../Rating/Rating";

const Map: React.FC = () => {
  const center = [37.7608, 140.4748];
  const prefectures = useAppSelector(selectPrefectures);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<PrefectureImage[]>([]);
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState<RecipeState[]>([]);
  const handleClose = () => setShow(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px",
      }}
    >
      <MapContainer
        center={center as MapCenter}
        zoom={5.5}
        style={{ width: "90vw", height: "90vh" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=v4T1pdLNYtqXIQR4IOYC"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {japanData.features.map((pref: any) => {
          const coordinates = pref.geometry.coordinates[0].map(
            (item: number[]) => [item[1], item[0]]
          );

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
              positions={coordinates as Coordinates}
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
                  // compare if the selected prefecture name is the same as the prefecture name from the DB. If true, sets the state with data from DB
                  prefectures.map((prefs) => {
                    if (prefs.title.split(" ")[0] === pref.properties.nam) {
                      setTitle(prefs.title);
                      setDescription(prefs.description);
                      setImages(prefs.image as PrefectureImage[]);
                      setShow(true);
                      setRecipe(prefs.recipes as any);
                    }
                  });
                },
              }}
            />
          );
        })}
      </MapContainer>
      {!images ? null : (
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {description}
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src={images[0] as any}
                  alt="first slide"
                  style={{
                    maxHeight: "300px",
                    maxWidth: "500px",
                    margin: "auto",
                  }}
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images[1] as any}
                  alt="first slide"
                  style={{
                    maxHeight: "300px",
                    maxWidth: "500px",
                    margin: "auto",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images[2] as any}
                  alt="first slide"
                  style={{
                    maxHeight: "300px",
                    maxWidth: "500px",
                    margin: "auto",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={images[3] as any}
                  alt="first slide"
                  style={{
                    maxHeight: "300px",
                    maxWidth: "500px",
                    margin: "auto",
                    borderRadius: "5px",
                  }}
                />
              </Carousel.Item>
            </Carousel>
            {recipe.map((rec: RecipeState) => {
              return (
                <Accordion key={rec.id}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>{rec.name}</Accordion.Header>
                    <Accordion.Body>
                      <img
                        src={rec.image}
                        alt={rec.name}
                        style={{ width: "200px" }}
                      />
                      <p>difficulty: {rec.difficulty}</p>
                      <Rating rating={rec.rating} />
                      <p>{rec.time}</p>
                      <p>{rec.description.substring(0, 650)}</p>
                      <Link to={`/recipes/${rec.id}`}>
                        <Button>Go to recipe</Button>
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              );
            })}
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Map;
