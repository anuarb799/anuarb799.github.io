import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "collins-aerospace",
    companyName: "Collins Aerospace",
    companyLogo: "/images/Collins.svg",
    companyWebsite: "https://www.collinsaerospace.com",
    positions: [
      {
        id: "collins-dt-coop",
        title: "Digital Technology Co-op",
        employmentPeriod: {
          start: "09.2024",
          end: "09.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Engineered an internal Python (PyGUI) tool to streamline machine floor operations, enhancing operator efficiency.
- Built and maintained backend services using .NET, ensuring reliability and scalability of internal applications.
- Developed extensions in Solumina SDK (Java) to automate workflows and reduce manual processing.
- Designed and deployed desktop applications in C#/.NET, delivering intuitive solutions for machine floor operators.
- Enhanced productivity by developing and optimizing PowerApps solutions for internal teams.
- Automated data reporting pipelines with Excel and Power BI, improving data visibility and decision-making.`,
        skills: [
          "Python",
          "PyGUI",
          ".NET",
          "C#",
          "Java",
          "Solumina SDK",
          "PowerApps",
          "Power BI",
          "Excel",
          "Automation",
          "Backend Development",
          "Desktop Applications",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "tengrinews",
    companyName: "Tengri News",
    companyLogo: "/images/Tengrinews.png",
    companyWebsite: "https://en.tengrinews.kz/",
    positions: [
      {
        id: "tengrinews-intern",
        title: "Software Engineering Intern",
        employmentPeriod: {
          start: "07.2024",
          end: "08.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Processed and analyzed 1M+ comments for multilingual sentiment analysis using RoBERTa, overcoming challenges in Kazakh and Russian NLP with translation APIs and custom encodings.
- Prototyped a hybrid recommendation system (LightFM-based) that achieved ~70% user engagement in content suggestions.
- Conducted experiments with various model architectures to improve accuracy and scalability of NLP pipelines.`,
        skills: [
          "Python",
          "RoBERTa",
          "NLP",
          "Machine Learning",
          "LightFM",
          "Recommendation Systems",
          "Sentiment Analysis",
          "Data Analysis",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "jusan-invest",
    companyName: "Jusan Invest JSC",
    companyLogo: "/images/Jusan.svg",
    companyWebsite: "https://jusaninvest.kz",
    positions: [
      {
        id: "jusan-intern",
        title: "Software Engineering Intern",
        employmentPeriod: {
          start: "06.2023",
          end: "08.2023",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed a regression testing suite with Cypress & Selenium, reducing frontend bugs by 23% and increasing release stability.
- Built a test coverage visualization tool in GitLab CI/CD, improving visibility of quality metrics across teams.
- Contributed to the mobile app frontend (React Native) for a limited-time "Raffle" campaign, enabling a successful client engagement initiative.`,
        skills: [
          "Cypress",
          "Selenium",
          "React Native",
          "GitLab CI/CD",
          "Testing",
          "Frontend Development",
          "Mobile Development",
          "Quality Assurance",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "University of Toronto",
    companyName: "University of Toronto",
    companyLogo: "/images/Uoft.svg",
    companyWebsite: "https://www.utoronto.ca",
    positions: [
      {
        id: "uoft-engineering",
        title: "Computer Engineering & Engineering Business (Minor)",
        employmentPeriod: {
          start: "09.2021",
          end: "06.2026",
        },
        icon: "education",
        description: `- Currently pursuing BASc Computer Engineering with Minor in Engineering Business (Expected graduation: June 2026).
- Participation in engineering business case competitions.
- Coursework includes: Software engineering, operating systems, logic design, signal processing, computer architecture, finance, supply chain management, economics.`,
        skills: [
          "Computer Engineering",
          "Engineering Business",
          "Software Engineering",
          "Operating Systems",
          "Logic Design",
          "Signal Processing",
          "Computer Architecture",
          "Finance",
          "Supply Chain Management",
          "Economics",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];
