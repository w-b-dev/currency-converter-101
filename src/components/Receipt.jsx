import React from "react";

const Receipt = ({ id, description, amount, currency, onRemoveEntry }) => {
  return (
    <li
      id={`receipt-${id}`}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid gray",
        padding: "1rem",
      }}
    >
      <span>
        ${amount} {currency}
      </span>{" "}
      <span
        style={{
          maxWidth: "20em",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        - {description}
      </span>
      <button style={{ marginLeft: "auto" }} onClick={onRemoveEntry}>
        Remove
      </button>
    </li>
  );
};

export default Receipt;
