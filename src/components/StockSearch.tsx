import styled from "@emotion/styled"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { useHistory } from "react-router-dom"

const TickerInput = styled.input`
    min-width: 350px;
    outline: none;
    height: 70px;
    padding: 0px 32px;
    font-size: 1.8em;
    border: none;
    border-radius: 8px 0 0 8px;
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
    border-radius: 0 8px 8px 0;
    /* border: 1px solid black; */
    font-weight: 900;
    font-family: sans-serif;

    transition: 180ms ease;

    &:hover {
        background-color: #6da2e3;
        cursor: pointer;
    }
`
const SearchBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Bar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Results = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const StockSearch = ({ submitStock }: any) => {
    const [ticker, setTicker] = useState("")
    const [searchClicked, setSearchClicked] = useState(false)

    let history = useHistory()
    useEffect(() => {
        console.log("tickerChanged")
    }, [ticker])

    const handleSubmit = (e: any) => {
        e.preventDefault()

        history.push(`/stocks/ticker/${ticker}`)
        console.log("submitted")
    }
    return (
        <SearchBar>
            <Bar>
                <TickerInput
                    type="text"
                    name="ticker"
                    placeholder="Enter Ticker Symbol (ex. AAPL)"
                    onMouseDown={evt => setSearchClicked(!searchClicked)}
                    onChange={evt => setTicker(evt.target.value)}
                />
                <form onSubmit={handleSubmit}>
                    <TickerSubmitButton
                        type="submit"
                        name="ticker"
                        placeholder="Search Ticker"
                    />
                </form>
            </Bar>
            {/* <Results>{searchClicked ? <h2>bye</h2> : <h2>hi</h2>}</Results> */}
        </SearchBar>
    )
}

export default StockSearch
