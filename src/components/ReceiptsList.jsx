import React from "react";
import Receipt from "./Receipt";

const ReceiptsList = ({ receipts, removeEntry }) => {
  return (
    <ol>
      {receipts.map((entry) => (
        <Receipt
          key={entry.id}
          id={entry.id}
          amount={entry.amount}
          currency={entry.currency}
          description={entry.description}
          onRemoveEntry={() => removeEntry(entry.id)}
        />
      ))}
    </ol>
  );
};

export default ReceiptsList;
