import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const MainPage = () => {
  return (
    <div>
    <Container>
    {/* You can use <Container fluid /> for width: 100% across all viewport and device sizes. */}
      <h3>My React Design Template</h3>
      <small>Main Page</small>
      <br />

      <br />

      <Row>
      <Col style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="/public/logo512.png" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="/public/logo512.png" /> */}
        <Card.Body>
          <Card.Title>Card Title 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere else</Button>
        </Card.Body>
      </Card>
      </Col>

      <Col style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="/public/logo512.png" /> */}
        <Card.Body>
          <Card.Title>Card Title 3</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="warning">Go somewhere else maybe?</Button>
        </Card.Body>
      </Card>
      </Col>
      </Row>

      <br />

      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default MainPage;