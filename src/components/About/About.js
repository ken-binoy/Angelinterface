import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Us
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          What we offer
        </h1>
        <p style={{ textAlign: "justify" }}>
          AngelInterface is a leading IT soulutions provider dedicated to delivering comprehensive technological services tailored to meet the unique needs of our clients. Specializing in AI and leveraging cutting-edge innovations,we empower buisinessses to thrive in the digital era.
          </p>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          why choose us
        </h1>
        <p style={{ textAlign: "justify" }}>
          AngelInterface is a leading IT soulutions provider dedicated to delivering comprehensive technological services tailored to meet the unique needs of our clients. Specializing in AI and leveraging cutting-edge innovations,we empower buisinessses to thrive in the digital era.
          </p>
      </Container>
    </Container>
  );
}

export default About;
