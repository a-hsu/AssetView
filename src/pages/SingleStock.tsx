import axios from "axios"
import React, { useState, useEffect } from "react"
import StockSearch from "../components/StockSearch"
import StockData from "../components/StockData"
import { useParams, useLocation, useHistory } from "react-router"
import Navbar from "../components/Navbar"
import styled from "@emotion/styled"

const StyledSingleStock = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

const SingleStock = () => {
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
            try {
                fetchData(ticker)
            } catch (error) {
                console.error(error)
            }
        }
    }, [ticker])

    const submitStock = (tickerSymbol: string) => {
        console.log("submittedStock")
        setTicker(tickerSymbol)
    }
    return (
        <>
            <Navbar />
            <StyledSingleStock>
                <StockSearch submitStock={submitStock} />
                <StockData />
            </StyledSingleStock>
        </>
    )
}

export default SingleStock
