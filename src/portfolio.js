/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vipin Kumar Karthikeyan",
  title: "Hi all, I'm Vipin",
  subTitle: emoji(
    "🚀 Cloud Data Engineer | Azure & Databricks Certified | Power BI Expert | ML Enthusiast\n 🎓 Master's in Business Analytics @UMass Amherst\n"
  ),
  resumeLink: "/resume.pdf",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/vipinkumar1999",
  linkedin: "https://www.linkedin.com/in/vipin-kumar21/",
  gmail: "vipin.k.karthikeyan@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "SOLVING COMPLEX DATA CHALLENGES THROUGH CLOUD, ANALYTICS, AND AUTOMATION",
  skills: [
    emoji(
      "⚡ End-to-end Data Engineering across Azure & AWS using tools like ADF, Databricks, PySpark, and Delta Lake"
    ),
    emoji(
      "⚡ Building scalable ETL/ELT pipelines and orchestrating workflows with Airflow, Azure DevOps, and GitHub"
    ),
    emoji(
      "⚡ Transforming raw data into actionable insights using Power BI, Excel, and Tableau for business decisioning"
    ),
    emoji(
      "⚡ Automating processes using CI/CD pipelines, version control (Git/GitHub/GitLab), and Docker containers"
    ),
    emoji(
      "⚡ Applying machine learning models (PyTorch, TensorFlow, Scikit-learn) for predictive analytics and optimization"
    ),
    emoji(
      "⚡ Collaborating cross-functionally with engineering, analytics, and product teams to drive data-first strategies"
    )
  ],
  softwareSkills: [
    {
      skillName: "Amazon Web Services",
      src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
    },
    {
      skillName: "Microsoft Azure",
      src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
    },
    {
      skillName: "Google Cloud Platform",
      src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
    },
    {
      skillName: "Python",
      src: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
    },
    {
      skillName: "PyTorch",
      src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
    },
    {
      skillName: "Tensorflow",
      src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      skillName: "Flask",
      src: "https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg"
    },
    {
      skillName: "PySpark",
      src: "https://spark.apache.org/images/spark-logo-trademark.png"
    },
    {
      skillName: "Apache Spark",
      src: "https://spark.apache.org/images/spark-logo-trademark.png"
    },
    {
      skillName: "Kafka",
      src: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"
    },
    {
      skillName: "Databricks",
      src: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg"
    },
    {
      skillName: "Snowflake",
      src: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg"
    },
    {
      skillName: "MS SQL Server",
      src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
    },
    {
      skillName: "PostgreSQL",
      src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    },
    {
      skillName: "Power BI",
      src: "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg"
    },
    {
      skillName: "Tableau",
      src: "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/tableau-icon.svg"
    },
    {
      skillName: "Excel",
      src: "https://cdn-icons-png.flaticon.com/512/732/732220.png"
    },
    {
      skillName: "Docker",
      src: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
    },
    {
      skillName: "Jenkins",
      src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
    },
    {
      skillName: "GitHub",
      src: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    {
      skillName: "GitLab",
      src: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png"
    },
    {
      skillName: "JIRA",
      src: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Massachusetts Amherst",
      logo: require("./assets/images/umassLogo.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "September 2024 – December 2025",
      desc: "Graduate Student at the Isenberg School of Management with a focus on data engineering, machine learning, and business-focused analytics.",
      descBullets: [
        "Coursework: Business Intelligence, Data Visualization, Python, Machine Learning, Statistics, Cloud Platforms, Agile Scrum, Supply Chain Analytics",
        "Capstone project: Built AI-powered decision systems integrating real-time data pipelines using Databricks and Azure"
      ]
    },
    {
      schoolName: "Anna University",
      logo: require("./assets/images/annaunivLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2017 – May 2020",
      desc: "Graduated with distinction, contributing to multiple ML-based research and academic projects.",
      descBullets: [
        "Published paper: 'Breast Cancer Prediction using Machine Learning' (IJAST Journal)",
        "Organized technical symposiums and led departmental academic clubs"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud Analytics Engineer",
      company: "Waters Corporation",
      companylogo: require("./assets/images/waters.png"),
      date: "June 2025 – Present",
      desc: "During my Waters Corporation internship, I developed a cloud management ecosystem that transformed multi-cloud infrastructure monitoring and optimization. I built a real-time observability platform tracking Azure and AWS costs, integrated ServiceNow and Jira for workload management, and created Power BI dashboards. The centerpiece was an Azure OpenAI chatbot allowing conversational queries of cloud costs, tickets, and metrics. This automated solution reduced cloud spending by 15% and improved operational efficiency."
    },
    {
      role: "Lead – Data & Analytics",
      company: "Thorogood Associates",
      companylogo: require("./assets/images/thorogood.png"),
      date: "July 2022 – July 2024",
      desc: "I led end-to-end data engineering solutions for Fortune 100 clients using Azure Data Factory, Databricks, and Power BI. I built pipelines that processed 500K+ invoices and 100K+ supplier records, integrated SAP data into an Azure Data Lake, and automated everything with CI/CD in Azure DevOps. I also created executive dashboards for sustainability KPIs and improved report refresh times by 40% using Delta Lake and optimized storage."
    },
    {
      role: "Data Engineer",
      company: "EXL Service",
      companylogo: require("./assets/images/exlservice.png"),
      date: "July 2021 – June 2022",
      desc: "I migrated on-prem systems to AWS and Azure, which cut infrastructure costs by 35% and boosted performance by 60%. I built high-volume ETL pipelines using AWS Glue, ADF, and integrated services like Lambda, S3, Kinesis, and Databricks to meet audit requirements and data SLAs."
    },
    {
      role: "Data Scientist",
      company: "Neewee Analytics",
      companylogo: require("./assets/images/neeweeanalytics.png"),
      date: "May 2020 – June 2021",
      desc: "At Neewee, I built machine learning pipelines for predictive maintenance that reduced unplanned downtime by 25%. I used MQTT, PostgreSQL, Python, and Scala to develop real-time anomaly detection and automated the data prep and reporting workflows to save both time and cost."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Recognitions, Certifications, and Accomplishments",
  achievementsCards: [
    {
      title: "Azure Data Engineer Associate – DP-203",
      subtitle: "Certified in data engineering on Microsoft Azure (2023).",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Azure",
      footerLink: [
        {
          name: "View Certification",
          url: "https://learn.microsoft.com/en-us/certifications/azure-data-engineer/"
        }
      ]
    },
    {
      title: "Databricks Certified Data Engineer Associate",
      subtitle:
        "Credentialed in scalable data engineering using Apache Spark on Databricks.",
      image: require("./assets/images/databricksLogo.png"),
      imageAlt: "Databricks",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.databricks.com/learn/certification/data-engineer-associate"
        }
      ]
    },
    {
      title: "Research Publication – IJAST Journal",
      subtitle:
        "Co-authored 'Breast Cancer Prediction Using Machine Learning' (April 2020).",
      image: require("./assets/images/publicationLogo.png"),
      imageAlt: "IJAST Publication",
      footerLink: [
        {
          name: "View Publication",
          url: "http://sersc.org/journals/index.php/IJAST/article/view/9377"
        }
      ]
    },
    {
      title: "Star Award – Thorogood Associates",
      subtitle:
        "Recognized in June 2024 for exceptional project delivery and stakeholder engagement.",
      image: require("./assets/images/thorogood.png"),
      imageAlt: "Thorogood Star Award",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 413 510 7910",
  email_address: "vipin.k.karthikeyan@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  techStack,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
