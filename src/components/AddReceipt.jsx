import React, { useState } from "react";

const AddReceipt = ({ saveReceipt, disabled, conversionRates }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("BRL");

  const handleSaveReceipt = () => {
    const payload = {
      id: Date.now(),
      description: desc,
      amount: amount,
      currency: currency,
    };
    saveReceipt(payload);
    setCurrency("USD");
    setDesc("");
    setAmount(0);
  };
  return (
    <section style={{ display: "flex", flexWrap: "wrap", maxWidth: "480px" }}>
      <label htmlFor="description">
        description
        <input
          id="description"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>

      <label htmlFor="amount">
        amount
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number.parseInt(e.target.value))}
        />
      </label>
      <select
        name="currency"
        id="currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {conversionRates.rates &&
          Object.keys(conversionRates.rates).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
      </select>
      <button onClick={handleSaveReceipt} disabled={disabled}>
        Save
      </button>
    </section>
  );
};

export default AddReceipt;
