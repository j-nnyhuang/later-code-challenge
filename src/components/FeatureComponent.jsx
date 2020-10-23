import React from "react";
import { Col } from "react-bootstrap";

// Components
import CustomButton from "./ButtonComponent";

export default function Feature({ img, color, name, oneLiner, blurb }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "3vw" }}>
      <Col xs={6} style={{ margin: "auto", padding: "2vw" }}>
        <img src={img} style={{ width: "100%", height: "auto" }} />
      </Col>
      <Col xs={6} style={{ padding: "2vw" }}>
        <h6 style={{ color: color }}>{name}</h6>
        <h3 style={{ marginBottom: 0 }}>{oneLiner}</h3>
        <p>{blurb}</p>
        <div style={{ width: "30%" }}>
          <CustomButton name={name} />
        </div>
      </Col>
    </div>
  );
}
