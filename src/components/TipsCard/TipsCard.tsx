import React from "react";
import { TipsState } from "../../store/tips/slice";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

interface TipsDisplayProps {
  tips: TipsState;
}

function TipsCard(props: TipsDisplayProps) {
  return (
    <div>
      {!props ? null : (
        <Container>
          <Card style={{ width: "18rem", border: "1px solid black" }}>
            <Card.Img
              variant="top"
              src={props.tips.image}
              style={{ width: "15rem" }}
            />
            <Card.Body>
              <Card.Title>{props.tips.name}</Card.Title>

              <Card.Text>{props.tips.description.substring(0, 150)}</Card.Text>

              <Link to={`/tips/${props.tips.id}`}>
                <Button variant="secondary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default TipsCard;
