import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section education-section section-container" id="education">
      <div className="career-container">
        <h2>
          Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. Business Analytics</h4>
                <h5>University of Massachusetts Amherst · Isenberg School of Management</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              GPA 4.0 / 4.0. Focused on data engineering, machine learning, and business analytics. Capstone: AI-powered decision systems with real-time data pipelines on Databricks and Azure.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Sc Data Science</h4>
                <h5>Coimbatore Institute of Technology · Coimbatore, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Graduated with distinction. Published research on Breast Cancer Prediction using Machine Learning (IJAST Journal). Led departmental academic clubs and organised technical symposiums.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;
