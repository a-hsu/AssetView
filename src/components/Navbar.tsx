import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
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
    width: 300px;
    justify-content: space-around;
    padding-right: 15px;
    align-items: center;

    a {
        text-decoration: none;
    }

    li {
        color: red;
        margin: 0 0.8rem;
        font-size: 1.3rem;
        position: relative;
        list-style: none;
    }

    .current {
        li {
            border-bottom: 2px solid black;
        }
    }
`
const LinkItem = styled.li`
    list-style: none;
    background-image: linear-gradient(90deg, #5e83fc, #4cd9eb);
    background-size: 0% 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 250ms ease;
    color: black;
    text-decoration: none;

    &:hover {
        background-size: 100% 3px;
        cursor: pointer;
    }
`.withComponent("a")

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
            <Title>AssetView</Title>
            <LinkBar>
                <NavLink to="/watchlist" activeClassName="current" exact>
                    <LinkItem>Watchlist</LinkItem>
                </NavLink>
                {/* <LinkItem to="#Crypto">Crypto</LinkItem> */}
                <Login>Login</Login>
            </LinkBar>
        </Nav>
    )
}

export default Navbar
