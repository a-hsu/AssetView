import styled from "@emotion/styled"
import React, { useState } from "react"
import StockSearch from "./StockSearch"
const StyledHeader = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

const Title = styled.h1`
    font-size: 8em;
`

const Header = () => {
    // const [ticker, setTicker] = useState("")
    // const handleSubmit = (evt: any) => {
    //     evt.preventDefault()
    //     alert(`Submitting ${ticker}`)
    // }
    const [ticker, setTicker] = useState("")
    const submitStock = (tickerSymbol: string) => {
        console.log(tickerSymbol)
        setTicker(tickerSymbol)
        // When this button is clicked, send the user to the single stock page "/stocks/ticker/${tickerSymbol}"
    }
    return (
        <StyledHeader>
            <Title>Getting Started</Title>
            <StockSearch submitStock={submitStock} />
        </StyledHeader>
    )
}

export default Header
