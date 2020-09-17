import React, { useEffect, useState, useCallback } from "react";

const ReceiptsTotal = ({ receipts, updateTotal, conversionRates }) => {
  const [total, setTotal] = useState(0);

  const getConversionRateFrom = useCallback(
    (from) => {
      return conversionRates && conversionRates.rates
        ? conversionRates.rates[from]
        : 1;
    },
    [conversionRates]
  );

  useEffect(() => {
    const _total = receipts.reduce((acc, e) => {
      const amount =
        "CAD" === e.currency
          ? e.amount
          : e.amount / getConversionRateFrom(e.currency);
      return Math.trunc(acc + amount);
    }, 0);
    updateTotal(_total);
    setTotal(_total);
  }, [receipts, getConversionRateFrom, updateTotal]);

  return <h2>Total: ${total} CAD</h2>;
};

export default ReceiptsTotal;
