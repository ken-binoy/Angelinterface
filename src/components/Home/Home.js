import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                  <p className="home-about-body">
                  Angelinterface is a leading IT soulutions provider dedicated to delivering comprehensive technological services tailored to meet
                  the unique needs of our clients. Specializing in AI and leveraging cutting-edge innovations,we empower buisinessses to thrive in the digital era.
                  </p>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
    </Container>
    </section>
  );
}

export default Home;
