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
    min-width: 180px;
    outline: none;
    height: 54px;
    padding: 0px 32px;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 20px 0 0 20px;
`
const TickerSubmitButton = styled.input`
    min-width: 100px;
    outline: none;
    height: 56px;
    padding: 0px 32px;
    font-size: 18px;
    border: none;
    color: white;
    background-color: #1e9eff;
    border-radius: 0 20px 20px 0;
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
                    placeholder="Enter Ticker Symbol"
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
