import styled from "@emotion/styled"
import React from "react"
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
// const HeaderInput = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
// `

const submitStock = (tickerSymbol: string) => {
    console.log("hi")
}
const Header = () => {
    // const [ticker, setTicker] = useState("")
    // const handleSubmit = (evt: any) => {
    //     evt.preventDefault()
    //     alert(`Submitting ${ticker}`)
    // }
    return (
        <StyledHeader>
            <Title>Getting Started</Title>
            <StockSearch submitStock={submitStock} />
        </StyledHeader>
    )
}

export default Header
