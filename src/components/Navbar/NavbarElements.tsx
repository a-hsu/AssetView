import styled from "@emotion/styled"

export const Nav = styled.div`
    position: sticky;
    top: 0;
    /* z-index: 10; */
    background-color: #000;
    height: 80px;
    width: 100%;
    margin-top: -80px;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`
export const NavTitle = styled.h2`
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
