import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Contact Us
        </h1>
        <p style={{ color: "white" }}>
          What we Offer .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;
