// All portfolio copy lives here. Components only handle presentation.

const base = import.meta.env.BASE_URL;

export const profile = {
  name: "Vipin Kumar Karthikeyan",
  shortName: "Vipin Kumar",
  initials: "VKK",
  role: "Data Engineer & BI Analyst",
  roleDetail: "Pipelines · Power BI · AI agents",
  headline: "I build the data pipelines, the BI reporting on top, and the AI agents that help run them.",
  intro:
    "Technical BI Analyst at Waters Corporation, building medallion-layer transformations on Databricks with Python and Unity Catalog, BI reporting tied to company KPIs, and RAG pipelines and AI agents that automate data transformation and metadata. At Thorogood I built an Azure lakehouse that processes 500K+ invoices at 99.9% accuracy, and Power BI dashboards over $3.06B in sales that identified $65.2M in lost sales. MS in Business Analytics, UMass Amherst · Azure and Databricks certified.",
  location: "Boston, MA",
  availability: "Open to Data Engineering and BI roles",
  email: "vipin.k.karthikeyan@gmail.com",
  phone: "+1 413 510 7910",
  phoneHref: "tel:+14135107910",
  github: "https://github.com/vipinkumar1999",
  linkedin: "https://www.linkedin.com/in/vipin-kumar21/",
  resume: `${base}resume.pdf`,
};

export const about =
  "My work covers both ends of the data. On the engineering side I ingest enterprise sources, build bronze, silver, and gold layers in Databricks and Azure Data Factory, and keep them accurate with CI/CD, automated validation, and Unity Catalog governance. On the BI side I model that data, write the DAX, build the Power BI dashboards, and work with stakeholders to define the KPIs they report. At Thorogood that meant a 500K-invoice lakehouse feeding sales analysis across 15+ categories. At Waters it also means AI: RAG pipelines and agents that handle data transformation and fill in metadata, so the engineering scales without more manual work.";

export const stats = [
  { value: "4+", label: "Years in data" },
  { value: "3", label: "Industries" },
  { value: "2", label: "Cloud certifications" },
  { value: "4", label: "Companies" },
];

export type Role = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  period: string;
  /** Achievement bullets. Figures like $65.2M, 99.9%, 500K+ are highlighted automatically. */
  points: string[];
};

export const experience: Role[] = [
  {
    id: "role-waters",
    title: "Technical Business Intelligence Analyst",
    company: "Waters Corporation",
    location: "Milford, MA",
    start: "2026-02",
    end: null,
    period: "Feb 2026 – Present",
    points: [
      "Build data transformation workflows across bronze, silver, and gold layers in Databricks with Python and Unity Catalog, behind a Streamlit-based enterprise analytics application.",
      "Build RAG pipelines and AI agents that automate data transformation and populate metadata across the platform.",
      "Develop and maintain the notebooks and pipelines that bring enterprise sources into a centralized analytics environment.",
      "Deliver BI reporting aligned to company KPIs and data-governance standards, working directly with business stakeholders.",
    ],
  },
  {
    id: "role-waters-intern",
    title: "Cloud Analytics Intern",
    company: "Waters Corporation",
    location: "Milford, MA",
    start: "2025-06",
    end: "2025-12",
    period: "Jun 2025 – Dec 2025",
    points: [
      "Architected a multi-cloud cost intelligence platform across 45+ Azure and 12 AWS accounts using Lambda, Data Factory, and Power BI, loading cost data from APIs with an automated daily refresh.",
      "Built a Python–ServiceNow integration with Jira workflows for incident management and ticket routing, cutting manual effort by 85%.",
      "Set up threshold-based alerting with service-principal authentication and automated email notifications for cost anomalies and budget variances.",
    ],
  },
  {
    id: "role-thorogood",
    title: "Data & Business Intelligence Engineer",
    company: "Thorogood Associates",
    location: "Bangalore, India",
    start: "2022-07",
    end: "2024-07",
    period: "Jul 2022 – Jul 2024",
    points: [
      "Architected a medallion lakehouse on Azure Data Factory, Databricks, and SQL Server, processing 500K+ invoices with CI/CD at 99.9% data accuracy.",
      "Built Power BI dashboards on Azure Analysis Services supporting $3.06B in sales analysis, identifying $65.2M in lost sales across 15+ categories.",
      "Made Power BI refresh 40% faster with partitioned Delta tables.",
      "Integrated SAP ERP and factory-level data into Azure Data Lake for a sustainability analytics platform, improving sustainable procurement visibility by 34%.",
      "Cut batch processing time by 30% with Databricks SQL, MLflow, and Power Automate, adding automated validation through Power Apps.",
    ],
  },
  {
    id: "role-exl",
    title: "Data Engineer Intern",
    company: "EXL Service",
    location: "Chennai, India",
    start: "2021-12",
    end: "2022-06",
    period: "Dec 2021 – Jun 2022",
    points: [
      "Migrated on-premise SQL Server to AWS (S3, Lambda, Kinesis, Aurora) and Azure, cutting compute cost by 35% and query time by 60%.",
      "Built ETL on AWS Glue and Azure Data Factory processing 500K+ medical claims per file, with real-time ingestion at 350K+ edits/sec for fraud detection.",
      "Orchestrated pre-pay and post-pay claim analytics through Databricks, Service Bus, and Blob Storage with secure audit trails.",
    ],
  },
  {
    id: "role-neewee",
    title: "Data Scientist Intern",
    company: "Neewee Analytics",
    location: "Bangalore, India",
    start: "2020-05",
    end: "2021-07",
    period: "May 2020 – Jul 2021",
    points: [
      "Deployed a predictive maintenance model for steam turbines using MSET and Statistical Process Control, reducing unplanned downtime by 25%.",
      "Automated fault detection with data imputation, feature engineering, and dashboards, lowering maintenance costs by 20%.",
    ],
  },
];

export const capabilities = [
  {
    title: "Data Engineering",
    kicker: "Pipelines & lakehouses",
    body: "Batch and streaming pipelines on Databricks, Azure Data Factory, and AWS Glue. Medallion lakehouses on Delta Lake, cloud migrations off on-prem SQL Server, and CI/CD, validation, and Unity Catalog governance to keep the data accurate.",
  },
  {
    title: "Business Intelligence",
    kicker: "Models & dashboards",
    body: "Data models, DAX, and Power BI dashboards for finance, sales, and operations, on Azure Analysis Services and partitioned Delta tables so they refresh fast. I work with stakeholders to define the KPIs first, and use Tableau, Looker, or Streamlit where the team needs them.",
  },
  {
    title: "AI for Data Engineering",
    kicker: "RAG & agents",
    body: "RAG pipelines and LLM agents that take on data engineering work: running data transformations, filling in metadata, and other repetitive pipeline tasks, so the platform stays documented and the team spends less time on manual steps.",
  },
];

export const skills = [
  { category: "Languages", tools: ["Python", "SQL", "PySpark", "Scala", "R", "Java", "C/C++"] },
  { category: "Cloud platforms", tools: ["Microsoft Azure", "AWS", "Databricks", "Snowflake", "GCP"] },
  {
    category: "Data engineering",
    tools: [
      "Azure Data Factory",
      "AWS Glue",
      "Delta Lake",
      "Unity Catalog",
      "Airflow",
      "Kafka",
      "Stream processing",
      "Data warehousing",
      "Relational & NoSQL databases",
    ],
  },
  {
    category: "BI & visualization",
    tools: ["Power BI", "DAX", "M Query", "Azure Analysis Services", "Tableau", "Looker", "QlikView", "Excel", "Streamlit"],
  },
  { category: "AI", tools: ["RAG pipelines", "LLM agents", "Amazon Bedrock", "SageMaker", "MLflow"] },
  {
    category: "Data & analytics",
    tools: ["Data modeling", "Data architecture", "Data quality & governance", "Statistical analysis"],
  },
  { category: "Ways of working", tools: ["Agile", "Stakeholder engagement", "Project management", "Cross-functional collaboration"] },
];

export const education = [
  {
    degree: "M.S. Business Analytics",
    school: "University of Massachusetts Amherst",
    detail: "Isenberg School of Management",
    period: "Sep 2024 – Dec 2025",
    summary:
      "GPA 4.0 / 4.0. Focused on data engineering, machine learning, and business analytics. Capstone: AI-powered decision systems with real-time data pipelines on Databricks and Azure.",
  },
  {
    degree: "M.Sc Data Science",
    school: "Coimbatore Institute of Technology",
    detail: "Anna University · Coimbatore, India",
    period: "Jul 2017 – May 2022",
    summary:
      "Graduated with distinction. Led departmental academic clubs and organised technical symposiums.",
  },
];

export const projectsResearch = [
  {
    title: "Voice-to-Text Q&A Chatbot",
    meta: "Academic project · Sep 2024 – Present",
    body: "Agentic AI chatbot on AWS: speech-to-text with Lambda, Transcribe, and S3, intent-based task routing, and a RAG pipeline on Amazon Bedrock and SageMaker for domain-specific answers.",
  },
  {
    title: "Breast Cancer Prediction using Machine Learning",
    meta: "Published research · M.Sc Data Science",
    body: "Machine learning classification models for early breast cancer prediction, published in the IJAST journal.",
  },
];

export const certifications = [
  { title: "Azure Data Engineer Associate", code: "DP-203", issuer: "Microsoft", year: "2023" },
  { title: "Databricks Certified Data Engineer Associate", code: "", issuer: "Databricks", year: "" },
];

export const sections = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "What I do" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
