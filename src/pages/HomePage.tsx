import portraitImage from "../img/pinn32.png";

function HomePage() {
  return (
    <>
      <section className="intro">
        <img id="portrait" src={portraitImage} alt="Pinn's portrait" title="Pinn's Portrait" />
        <h1>Pinn Xu</h1>
        <p>Master&apos;s Student at EMS Boston University</p>
      </section>

      <section className="main-content">
        <h2>About Me</h2>
        <p>
          A master&apos;s student in{" "}
          <a href="https://www.bu.edu/com/programs/emerging-media-studies/">
            Emerging Media Studies
          </a>{" "}
          at Boston University, with strong background in digital communication and narratives,
          showing keen interest in front-end design and development.
        </p>

        <h2>Skills</h2>
        <h3>Technologies</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Figma</li>
          <li>WordPress</li>
          <li>Python, R, SPSS (for data analysis)</li>
          <li>Adobe Creative Suite (Ps, Ai, Pr, etc.)</li>
          <li>Canva, Xiumi, InDesign</li>
          <li>Procreate, Clip Studio Paint</li>
          <li>MS Office (Word, PowerPoint, Excel)</li>
        </ul>

        <h3>Communication</h3>
        <ul>
          <li>Content Writing and Editing</li>
          <li>Social Media Management</li>
          <li>Video Production and Editing</li>
        </ul>

        <h3>Research</h3>
        <ul>
          <li>Qualitative and Quantitative Research Methods</li>
          <li>Data Analysis with SPSS and Python</li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;
