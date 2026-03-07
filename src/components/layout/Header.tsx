import styled from "styled-components";

const StyledHeader = styled.header`
    font-family: "DM Serif Text", Times, serif;
    font-size: calc(12px + 0.2vw);
    padding: 3% 4%;
    background-color: seagreen;
    color: whitesmoke;
    
    @media (max-width: 750px) {
        text-align: center;
        padding: 4% 1%;
    }
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>Pinn&apos;s Resume</h1>
      <p>A website showing Pinn&apos;s research interests, career goals, and hobbies.</p>
    </StyledHeader>
  );
}


