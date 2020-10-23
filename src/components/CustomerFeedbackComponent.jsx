import React from "react";

// Asssets
import Stars from "../assets/svgs/stars-069fa221.svg";
import colors from "../assets/config/colors";

export default function CustomerFeedback({
  comment,
  customerName,
  customerTitle,
  customerImage,
}) {
  return (
    <div
      style={{
        margin: "1vw",
        padding: "2vw",
        backgroundColor: colors.customerFeedbackCard,
        borderRadius: "5px",
        width: "25vw",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <img src={Stars} alt="5 Stars" />
        <p style={{ fontSize: "0.8rem" }}>{comment}</p>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src={customerImage}
          alt={customerName}
          style={{ width: "25%", marginRight: "5%" }}
        />
        <div>
          <h5 style={{ fontWeight: "bold", margin: 0 }}>{customerName}</h5>
          <p style={{ fontSize: "0.8rem", margin: 0 }}>{customerTitle}</p>
        </div>
      </div>
    </div>
  );
}
