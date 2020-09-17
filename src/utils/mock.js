export const initialState = [
    {
        id: '312312', description: "I am a receipt", amount: 200.12, currency: "BRL"
    },
    {
        id: '4534512', description: "I am a receipt 2", amount: 900.12, currency: "CAD"
    },
    {
        id: '88921', description: "I am a receipt 4", amount: 400.12, currency: "USD"
    },
]

export const CURRENCY_API = "https://api.exchangeratesapi.io/latest?base=CAD"