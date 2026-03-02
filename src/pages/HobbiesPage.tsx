import sampleArt1 from "../img/sample-art-1.png";
import sampleArt2 from "../img/sample-art-2.png";
import sampleArt3 from "../img/sample-art-3.png";
import sampleMusic1 from "../img/sample-music-1.png";
import sampleMusic2 from "../img/sample-music-2.png";

function HobbiesPage() {
  return (
    <>
      <section className="intro">
        <h1>Hobbies</h1>
        <p>This page introduces Pinn&apos;s hobbies after class.</p>
      </section>

      <section className="main-content">
        <h2>Art</h2>
        <p>
          I practice visual arts and digital painting because I enjoy exploring color, form, and
          mood. Working with images helps me slow down and notice small details in everyday life.
        </p>

        <h3>Sample Arts</h3>
        <div className="gallery">
          <div className="img-box">
            <img src={sampleArt1} alt="Sample Art 1" title="Sample Art 1" />
          </div>
          <div className="img-box">
            <img src={sampleArt2} alt="Sample Art 2" title="Sample Art 2" />
          </div>
          <div className="img-box">
            <img src={sampleArt3} alt="Sample Art 3" title="Sample Art 3" />
          </div>
        </div>

        <h2>Music</h2>
        <p>
          I compose music by turning ideas and feelings into melodies and rhythms, then iterating
          drafts with feedback before finalizing each piece.
        </p>

        <h3>Sample Music</h3>
        <div className="gallery">
          <div className="img-box">
            <a href="https://www.bilibili.com/video/BV1uTPmeEEyq/" target="_blank" rel="noopener noreferrer">
              <img src={sampleMusic1} alt="Sample Music 1" title="Sample Music 1" />
            </a>
          </div>
          <div className="img-box">
            <a href="https://www.bilibili.com/video/BV1Xp4y1t798/" target="_blank" rel="noopener noreferrer">
              <img src={sampleMusic2} alt="Sample Music 2" title="Sample Music 2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HobbiesPage;
