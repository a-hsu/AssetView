import styled from "@emotion/styled"
import React, { useState } from "react"
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

const TickerInput = styled.input`
    min-width: 350px;
    outline: none;
    height: 70px;
    padding: 0px 32px;
    font-size: 1.8em;
    border: none;
    border-radius: 20px 0 0 20px;
    color: black;
    background-color: #e6e6e6;
`
const TickerSubmitButton = styled.input`
    position: relative;
    min-width: 150px;
    /* left: 500px; */
    outline: none;
    height: 70px;
    padding: 0px 32px;
    font-size: 1.8em;
    border: none;
    color: white;
    background-color: #2f82ff;
    border-radius: 0 20px 20px 0;
    /* border: 1px solid black; */
    font-weight: 900;
    font-family: sans-serif;

    transition: 180ms ease;

    &:hover {
        background-color: #6da2e3;
        cursor: pointer;
    }
`
const Title = styled.h1`
    font-size: 8em;
`
const HeaderInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    const [ticker, setTicker] = useState("")
    const handleSubmit = (evt: any) => {
        evt.preventDefault()
        alert(`Submitting ${ticker}`)
    }
    return (
        <StyledHeader>
            <Title>Getting Started</Title>
            <HeaderInput>
                <TickerInput
                    type="text"
                    name="ticker"
                    placeholder="Enter Ticker Symbol (ex. AAPL)"
                    onChange={evt => setTicker(evt.target.value)}
                />
                <TickerSubmitButton
                    type="submit"
                    name="ticker"
                    placeholder="Search Ticker"
                    onClick={handleSubmit}
                />
            </HeaderInput>
        </StyledHeader>
    )
}

export default Header
