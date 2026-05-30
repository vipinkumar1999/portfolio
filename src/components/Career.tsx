import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Business Intelligence Analyst</h4>
                <h5>Waters Corporation · Milford, MA</h5>
              </div>
              <h3>Jan 2026 – Present</h3>
            </div>
            <p>
              Building and maintaining Databricks notebooks and data pipelines integrating enterprise sources into centralized analytics environments. Contributing to a Streamlit-based enterprise analytics application on Databricks, delivering BI reporting aligned to organizational KPIs and data governance standards.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Analytics Intern</h4>
                <h5>Waters Corporation · Milford, MA</h5>
              </div>
              <h3>Jun 2025 – Dec 2025</h3>
            </div>
            <p>
              Architected a multi-cloud cost intelligence platform across 45+ Azure and 12 AWS accounts using Lambda, Data Factory, and Power BI. Engineered ServiceNow–Python integration and Jira workflows, reducing manual effort by 85%, with real-time alerting for cost anomalies and budget variances.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data & Business Intelligence Engineer</h4>
                <h5>Thorogood Associates · Bangalore, India</h5>
              </div>
              <h3>Jul 2022 – Jul 2024</h3>
            </div>
            <p>
              Architected an end-to-end medallion data lakehouse on Azure Data Factory and Databricks, processing 500K+ invoices at 99.9% accuracy. Built enterprise Power BI dashboards supporting $3.06B in sales analysis, identified $65.2M in lost sales, and improved BI refresh performance by 40%.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer Intern</h4>
                <h5>EXL Service · Chennai, India</h5>
              </div>
              <h3>Jul 2021 – Jun 2022</h3>
            </div>
            <p>
              Migrated on-premise SQL Server to AWS and Azure, reducing compute costs by 35% and improving query performance by 60%. Built scalable ETL pipelines using AWS Glue and Azure Data Factory, processing 500K+ medical claims per file with real-time ingestion and fraud detection at 350K+ edits/sec.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>Neewee Analytics · Bangalore, India</h5>
              </div>
              <h3>May 2020 – Jun 2021</h3>
            </div>
            <p>
              Deployed a predictive maintenance solution for steam turbines using MSET and Statistical Process Control, reducing unplanned downtime by 25%. Automated fault detection workflows with data imputation and feature engineering, lowering maintenance costs by 20%.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
