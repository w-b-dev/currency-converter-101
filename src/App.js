import React, { useEffect, useState } from 'react';
import './App.css';
import AddReceipt from "./components/AddReceipt";
import { CURRENCY_API, initialState } from "./utils/mock";
import ReceiptsTotal from "./components/ReceiptsTotal";
import ReceiptsList from "./components/ReceiptsList";
import ExpensesSubmission from "./components/ExpensesSubmission";

function App() {
    const [state, setState] = useState({ receipts: initialState, total: 0 })
    const [conversionRates, setConversionRates] = useState({})

    const saveReceipt = (receipt) => {
        setState({
            ...state,
            receipts: state.receipts.concat(receipt),
        });
    }
    const handleRemove = (id) => {
        setState({
            ...state,
            receipts: state.receipts.filter(e => e.id !== id)
        })
    }
    const updateTotal = (t) => {
        if (t !== state.total) {
            setState({
                ...state,
                total: t
            })
        }
    }

    useEffect(() => {
        const getConversionRates = async () => {
            const res = await fetch(CURRENCY_API, { method: "GET" });
            const data = await res.json();
            setConversionRates(data);
        }
        getConversionRates();
    }, [])

    return (
        <div className="App">
            <AddReceipt saveReceipt={saveReceipt} disabled={state.receipts.length >= 5} conversionRates={conversionRates} />
            <ReceiptsList receipts={state.receipts} removeEntry={handleRemove} />
            <ReceiptsTotal receipts={state.receipts} updateTotal={updateTotal} conversionRates={conversionRates} />
            <ExpensesSubmission state={state} />
        </div>
    );
}

export default App;
