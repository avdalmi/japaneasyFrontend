import { useEffect } from "react";
import Map from "../../components/Map/Map";
import { useAppDispatch } from "../../hooks";
import { getAllPrefectures } from "../../store/prefectures/thunks";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./MapPage.css";
import { MainTitle } from "../../styles/Text";
import {
  GovernmentText,
  ClimateText,
  GeographyText,
  HistoryText,
  LanguagesText,
  PopulationText,
  ReligionText,
} from "./HistoryData";

const MapPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPrefectures());
  }, [dispatch]);

  return (
    <div className="mapSectionContainer">
      <MainTitle>Get to know Japan</MainTitle>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Government</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Population</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Languages</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Religion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Geography</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Climate</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">History</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first" className="tabPaneContent">
                <GovernmentText />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <PopulationText />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <LanguagesText />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <ReligionText />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <GeographyText />{" "}
              </Tab.Pane>
              <Tab.Pane eventKey="sixth">
                <ClimateText />
              </Tab.Pane>
              <Tab.Pane eventKey="seventh">
                <HistoryText />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <MainTitle>Learn about prefectures</MainTitle>
      <p>
        Click on each prefecture to find out more about the prefecutre and their
        special recipes
      </p>
      <Map />
    </div>
  );
};

export default MapPage;
