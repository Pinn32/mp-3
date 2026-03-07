import styled from "styled-components";

// StyledIntro: title section within main tag in each page
export const StyledIntro = styled.section`
  text-align: center;

  h1 {
    padding-top: 1%;
    font-size: calc(20px + 1vw);
  }

  p {
    padding: 1% 0;
    font-size: calc(10px + 0.5vw);
    font-style: italic;
  }

  img {
    max-width: 30%;
    margin: 2%;
  }

  @media (max-width: 750px) {
    h1 {
      font-size: calc(20px + 1vw);
      padding-top: 1%;
    }

    p {
      font-size: calc(10px + 1vw);
    }
    
    img {
      max-width: 20%;
      margin: 2%;
    }
  }
`
// StyledMainContent: content section within main tag in each page
export const StyledMainContent = styled.section`
  text-align: left;
  margin: 1%;
`