import { Link } from "react-router-dom";

import { TipsState } from "../../store/tips/slice";
import * as loadingNoodles from "../Loading/39520-japanese-noodles.json";
import { Loading } from "../index";

import "./TipsCard.css";
import { Card, Button, Row } from "react-bootstrap";

interface TipsDisplayProps {
  tips: TipsState;
}

function TipsCard(props: TipsDisplayProps) {
  return (
    <div>
      {!props ? (
        <Loading animationData={loadingNoodles} />
      ) : (
        <Row className="tipsCardContainer">
          <Card className="tipsCardCardContainer">
            <Card.Img
              variant="top"
              src={props.tips.image}
              className="tipsCardImage"
            />
            <Card.Body className="tipsCardBody">
              <Card.Title>{props.tips.name}</Card.Title>

              <Card.Text>
                {props.tips.description.substring(0, 150)}...
              </Card.Text>

              <Link to={`/tips/${props.tips.id}`}>
                <Button className="tipsCardButton" variant="secondary">
                  Read more
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Row>
      )}
    </div>
  );
}

export default TipsCard;
