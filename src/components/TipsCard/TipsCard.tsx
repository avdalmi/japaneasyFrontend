import React from "react";
import { TipsState } from "../../store/tips/slice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Loading from "../Loading/Loading";
import "./TipsCard.css";
import { Col, Row } from "react-bootstrap";

interface TipsDisplayProps {
  tips: TipsState;
}

function TipsCard(props: TipsDisplayProps) {
  return (
    <div>
      {!props ? (
        <Loading />
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
