import Calculator from "../components/calculator/Calculator";

function ProjectsPage() {
  return (
    <>
      <section className="intro">
        <h1>Projects</h1>
        <p>Current projects and previous projects archive.</p>
      </section>

      <section className="main-content">
        <Calculator />

        <section>
          <h2>Data Visualization Projects</h2>
          <p>
            Below are two data visualization projects I worked on during my undergraduate studies.
            Three documents are involved in each project: an HTML report with interactive plots,
            a CSV file of data, and a PDF report.
          </p>

          <h3>Catalan Referendum Tweet Sentiment Analysis Using Multiple Lexicons</h3>
          <p>
            This project involved analyzing Twitter data to understand public sentiment towards
            climate change over a six-month period using Python, sentiment analysis, and
            visualizations.
          </p>
          <ul>
            <li>
              <a
                href="https://canvas.liverpool.ac.uk/eportfolios/1808/entries/10700/files/HE47Qb4Jp5jV6gam9rZk7jU6a2gbUnRR5cRojg4r"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML Report
              </a>
            </li>
            <li>
              <a
                href="https://canvas.liverpool.ac.uk/eportfolios/1808/entries/10700/files/yh9sGJm7IS5dibkufdRtCILlaDQDm0gNY2imlgtJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data CSV
              </a>
            </li>
            <li>
              <a
                href="https://canvas.liverpool.ac.uk/eportfolios/1808/entries/10700/files/xqhBWtxEXvnjzWJFProEiyfajhmTxox5NDWUYf6j"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF Report
              </a>
            </li>
          </ul>

          <h3>Global Visa Cost Explorer: Visualizing International Visa Fees</h3>
          <p>
            This project uses the Global Visa Cost Dataset from the Migration Policy Center,
            European University Institute, and presents interactive visualizations: a Sankey
            diagram, a bar chart, and a choropleth map.
          </p>
          <ul>
            <li>
              <a
                href="https://canvas.liverpool.ac.uk/eportfolios/1808/entries/10700/files/4R0an8i5t9Dlqh92NzEhYQ06T1B6IaAnrx5gUEZv"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML Report
              </a>
            </li>
            <li>
              <a
                href="https://canvas.liverpool.ac.uk/eportfolios/1808/entries/10700/files/Hc50obwf9bED9ObqH5FLsBlzb7y2GMyaJXfXCr5j"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data CSV
              </a>
            </li>
            <li>
              <a
                href="https://canvas.liverpool.ac.uk/eportfolios/1808/entries/10700/files/UBPVaZ3oAQkRflW4sYnzK5FIwOur45roDJD2Yu3X"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF Report
              </a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default ProjectsPage;
