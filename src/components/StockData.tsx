import axios from "axios"
import React, { useState, useEffect } from "react"
import StockSearch from "./StockSearch"
import { useParams, useLocation, useHistory } from "react-router"
const StockData = () => {
    const [stock, setStock] = useState({})
    const [ticker, setTicker] = useState("")
    const [stockQuote, setStockQuote] = useState({})

    // let slug = useLocation().pathname.substring(15)
    // setTicker(slug)

    useEffect(() => {
        function getFetchCompanyUrl(ticker: string) {
            return `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}`
        }
        async function fetchData(ticker: string) {
            const result = await fetch(getFetchCompanyUrl(ticker), {
                headers: {
                    "X-Finnhub-Token": "c4etl4iad3idjav44sf0",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            const data = await result.json()
            console.log(data)
            setStock(data)
        }

        if (ticker.length !== 0) {
            fetchData(ticker)
        }
    }, [ticker])

    const submitStock = (tickerSymbol: string) => {
        setTicker(tickerSymbol)
    }
    return (
        <div>
            <h2>Data</h2>
        </div>
    )
}

export default StockData
