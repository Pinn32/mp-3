import { useEffect } from "react";
import sampleArt1 from "../../../public/sample-art-1.png";
import sampleArt2 from "../../../public/sample-art-2.png";
import sampleArt3 from "../../../public/sample-art-3.png";
import sampleMusic1 from "../../../public/sample-music-1.png";
import sampleMusic2 from "../../../public/sample-music-2.png";
import {StyledIntro, StyledMainContent} from "../layout/main-layout.styles";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2%;

  @media (max-width: 750px) {
    padding-top: 0;
    padding-bottom: 5%;
  }
`

const StyledImgBox = styled.div`
  max-width: 50%;
  padding: 2%;

  img {
    max-width: 100%;
    height: auto;
    border-radius: calc(2px + 0.5vw);
  }
  
  @media (max-width: 750px) {
    max-width: 80%;
    padding: 5% 5% 0 5%;

    img {
      border-radius: calc(2px + 1vw);
    }
  }
`

export default function HobbiesPage() {
  useEffect(() => {
    document.title = "Hobbies | Resume";
  }, []);

  return (
    <>
      <StyledIntro>
        <h1>Hobbies</h1>
        <p>This page introduces Pinn&apos;s hobbies after class.</p>
      </StyledIntro>

      <StyledMainContent>
        <h2>Art</h2>
        <p>
          I practice visual arts and digital painting because I enjoy exploring color, form, and
          mood. Working with images helps me slow down and notice small details in everyday life.
        </p>

        <h3>Sample Arts</h3>
        <StyledGallery>
          <StyledImgBox>
            <img src={sampleArt1} alt="Sample Art 1" title="Sample Art 1" />
          </StyledImgBox>
          <StyledImgBox>
            <img src={sampleArt2} alt="Sample Art 2" title="Sample Art 2" />
          </StyledImgBox>
          <StyledImgBox>
            <img src={sampleArt3} alt="Sample Art 3" title="Sample Art 3" />
          </StyledImgBox>
        </StyledGallery>

        <h2>Music</h2>
        <p>
          I compose music by turning ideas and feelings into melodies and rhythms, then iterating
          drafts with feedback before finalizing each piece.
        </p>

        <h3>Sample Music</h3>
        <StyledGallery>
          <StyledImgBox>
            <a href="https://www.bilibili.com/video/BV1uTPmeEEyq/" target="_blank" rel="noopener noreferrer">
              <img src={sampleMusic1} alt="Sample Music 1" title="Sample Music 1" />
            </a>
          </StyledImgBox>
          <StyledImgBox>
            <a href="https://www.bilibili.com/video/BV1Xp4y1t798/" target="_blank" rel="noopener noreferrer">
              <img src={sampleMusic2} alt="Sample Music 2" title="Sample Music 2" />
            </a>
          </StyledImgBox>
        </StyledGallery>
      </StyledMainContent>
    </>
  );
}

