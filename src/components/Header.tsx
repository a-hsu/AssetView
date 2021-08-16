import styled from "@emotion/styled"

const StyledHeader = styled.div`
    background-color: #ffffff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TickerInput = styled.input`
    min-width: 300px;
    outline: none;
    height: 70px;
    padding: 0px 32px;
    font-size: 18px;
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
    font-size: 18px;
    border: none;
    color: white;
    background-color: #2f82ff;
    border-radius: 0 20px 20px 0;
    /* border: 1px solid black; */
    font-weight: 900;
    font-family: sans-serif;
`
const Title = styled.h1`
    font-size: 90px;
`
const HeaderInput = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Header = () => {
    return (
        <StyledHeader>
            <Title>Getting Started</Title>
            <HeaderInput>
                <TickerInput
                    type="text"
                    name="ticker"
                    placeholder="Enter Ticker Symbol (ex. AAPL)"
                />
                <TickerSubmitButton
                    type="submit"
                    name="ticker"
                    placeholder="Search Ticker"
                />
            </HeaderInput>
        </StyledHeader>
    )
}

export default Header
