import styled from "@emotion/styled"

const StyledFooter = styled.div`
    width: 100%;
    height: 50px;
    background-color: #888888;
`
const Footer = () => {
    return (
        <StyledFooter>
            <h3>Lorem Ipsum</h3>
            <div>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </div>
            <h3>Social Media</h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <i className="fab fa-github-square"></i>
                <i className="fab fa-linkedin"></i>
            </div>
        </StyledFooter>
    )
}

export default Footer
