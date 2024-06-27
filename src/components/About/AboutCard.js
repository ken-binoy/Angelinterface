import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          AngelInterface is a leading IT soulutions provider dedicated to delivering comprehensive technological services tailored to meet the unique needs of our clients. Specializing in AI and leveraging cutting-edge innovations,we empower buisinessses to thrive in the digital era.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
