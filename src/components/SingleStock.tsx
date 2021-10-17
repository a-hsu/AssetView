import axios from "axios"
import React, { useState, useEffect } from "react"
const SingleStock = () => {
    const [stock, setStock] = useState({})
    const [ticker, setTicker] = useState("")
    useEffect(() => {
        function getFetchCompanyUrl(ticker: string) {
            return `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}`
        }
        async function fetchData(ticker: string) {
            const result = await axios(getFetchCompanyUrl(ticker))
            setStock(result.data)
        }
        fetchData(ticker)
    }, [stock])

    return (
        <div>
            <h1>Single Stock Page</h1>
            <h3>{ticker}</h3>
        </div>
    )
}

export default SingleStock
