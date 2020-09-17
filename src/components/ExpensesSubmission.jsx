import React, { useEffect, useState } from "react";

const ExpensesSubmission = ({ state }) => {
  const { total } = state;
  const [isGreater, setIsGreater] = useState(false);
  useEffect(() => {
    setIsGreater(total > 1000);
  }, [total]);
  return (
    <button
      disabled={isGreater ? "disabled" : ""}
      onClick={() => console.log("RECEIPTS LIST:", state.receipts)}
    >
      SUBMIT
    </button>
  );
};

export default ExpensesSubmission;
