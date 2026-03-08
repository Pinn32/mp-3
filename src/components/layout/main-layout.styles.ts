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

  h2 {
    text-align: left;
    padding: 2% 0 0 0;
    font-size: calc(16px + 1vw);
  }

  h3 {
    text-align: left;
    padding: 3% 0 0 0;
    font-size: calc(12px + 1vw);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: calc(2px + 0.5vw);
    font-size: calc(10px + 0.5vw);
    padding-top: 2%;
    padding-bottom: 3%;
  }

  p {
    padding: 2% 0;
    font-size: calc(10px + 0.5vw);
  }

  a {
    &:link {
      color: darkgreen;
      text-decoration: none;
    }

    &:visited {
      color: cadetblue;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 750px) {
    h2 {
      font-size: calc(16px + 1vw);
    }

    h3 {
      padding-top: 2%;
      padding-bottom: 1%;
    }

    p {
      font-size: calc(12px + 0.5vw);
      padding-bottom: 2%;
    }

    ul {
      font-size: calc(12px + 0.5vw);
      padding-top: 2%;
      padding-bottom: 3%;
    }
  }
`
