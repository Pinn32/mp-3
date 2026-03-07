import { useEffect } from "react";
import {StyledIntro, StyledMainContent} from "../layout/main-layout.styles";

export default function ResearchPage() {
  useEffect(() => {
    document.title = "Research | Resume";
  }, []);

  return (
    <>
      <StyledIntro>
        <h1>Research</h1>
        <p>Pinn&apos;s research interests and skills.</p>
      </StyledIntro>

      <StyledMainContent>
        <h2>Research Interests</h2>
        <p>
          I am interested in digital and emerging media, especially how new technologies shape
          communication and social behavior. My focus includes emerging technologies and
          computer-assisted communication, including how algorithms, platforms, and AI affect who
          speaks, who is heard, and how communities form online.
        </p>
        <p>
          I apply theories such as social information processing, affordances, and media effects to
          explain user behavior, trust, and community norms on digital platforms. Linking theory to
          data helps me form testable hypotheses and interventions.
        </p>
        <p>
          I use research findings to design interventions and prototypes, including wireframes,
          low-fidelity concepts, and basic usability tests to iterate practical, user-friendly
          solutions.
        </p>

        <h2>Research Skills</h2>
        <p>
          I use quantitative methods and computational approaches to study media and communication,
          including survey design, content analysis, crosstabs, and statistical analysis.
        </p>
        <p>
          My process starts with clear research questions, then aligns methods to goals: surveys
          and experiments for causal claims, content analysis for media patterns, and interviews for
          deeper user perspectives.
        </p>
        <p>
          I work with inferential statistics, regression, and frequency analysis, and emphasize
          validity, reliability, reproducible workflows, and clear reporting with tables and graphs.
        </p>
      </StyledMainContent>
    </>
  );
}

