import styled from "@emotion/styled"

const Nav = styled.div`
    position: fixed;
    background-color: #ffffff;
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h2`
    font-weight: 300;
    margin-left: 20px;
`
const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: center;
    justify-content: space-around;
    width: 300px;
`
const LinkItem = styled.li`
    list-style: none;
    background-image: linear-gradient(90deg, #5e83fc, #4cd9eb);
    background-size: 0% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 250ms ease;

    &:hover {
        background-size: 100% 3px;
    }
`

const LinkBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-around;
    padding-right: 15px;
`
const Login = styled.button`
    border: none;
    background-color: #276de4;
    color: white;
    border-radius: 5px;
    width: 75px;
    height: 30px;
    font-size: 14px;
    align-self: center;
    transition: 180ms ease;

    &:hover {
        background-color: #7da2e3;
        cursor: pointer;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <Title>StockView</Title>
            <LinkBar>
                <NavLinks>
                    <LinkItem>Stocks</LinkItem>
                    <LinkItem>Crypto</LinkItem>
                    <Login>Login</Login>
                </NavLinks>
            </LinkBar>
        </Nav>
    )
}

export default Navbar
