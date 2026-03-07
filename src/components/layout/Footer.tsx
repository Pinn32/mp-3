import styled from "styled-components";

const StyledFooter = styled.footer`
    font-family: "DM Serif Text", Times, serif;
    font-size: calc(2px + 1vw);
    padding: 1%;
    background-color: seagreen;
    color: whitesmoke;

    @media (max-width: 750px) {
        font-size: calc(6px + 0.5vw);
    }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        All Rights Reserved by Pinn Xu <a href="https://github.com/Pinn32">Credits</a> &#169;
      </p>
    </StyledFooter>
  );
}
