import "./styles/Certifications.css";

const certs = [
  {
    logo: "/images/azure.png",
    title: "Azure Data Engineer Associate",
    badge: "DP-203",
    description:
      "Certified in data engineering on Microsoft Azure (2023).",
    link: "#",
  },
  {
    logo: "/images/databricks.png",
    title: "Databricks Certified Data Engineer Associate",
    badge: "",
    description:
      "Credentialed in scalable data engineering using Apache Spark on Databricks.",
    link: "#",
  },
];

const Certifications = () => {
  return (
    <div className="certs-section section-container" id="certifications">
      <h2 className="certs-heading">Certifications</h2>
      <div className="certs-grid">
        {certs.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <img src={cert.logo} alt={cert.title} className="cert-logo" />
            <div className="cert-info">
              <h3 className="cert-title">
                {cert.title}
                {cert.badge && (
                  <span className="cert-badge">{cert.badge}</span>
                )}
              </h3>
              <p className="cert-desc">{cert.description}</p>
            </div>
            <a
              href={cert.link}
              className="cert-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
