import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Anuar",
  lastName: "Bekturganov",
  displayName: "Anuar Bekturganov",
  username: "anuarb",
  gender: "male",
  pronouns: "he/him",
  bio: "Aspiring Software & Digital Technology Engineer.",
  flipSentences: [
    "Software Engineering.",
    "Data Analytics.",
    "Digital Technology.",
  ],
  address: "Toronto, Canada",
  phoneNumber: "KzEgIDQzNyAgMjYwICAzOCAgNTA=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "YW51YXJiNzk5QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://anuarb799.github.io",
  jobTitle: "Computer Engineering @ UofT",
  jobs: [
    {
      title: "Computer Engineering",
      company: "UofT",
      website: "https://www.utoronto.ca/",
    },
  ],
  about: `
- **Aspiring Software & Digital Technology Engineer**.
- **BASc Computer Engineering with a Minor in Engineering Business** @ UofT (June 2026).
- Lived in Almaty, Kazakhstan; Kyiv, Ukraine (5 Years); Prague, Czechia (1 Year); Bern, Switzerland (3 Years).
- Played Professional Football @ Lokomotiv Kyiv, Dukla FC, FC Muri-Gumligen.
- Completed My First Marathon in October, 2025 @ Niagara Falls (3:31).
`,
  avatar: "/images/avatar.JPEG",
  ogImage: `${process.env.APP_URL || "https://anuarb799.github.io"}/images/og-image.png`,
  namePronunciationUrl: "",
  timeZone: "America/Toronto",
  keywords: [
    "anuarb",
    "anuarb799",
    "anuar bekturganov",
    "anuar b",
    "computer engineering",
    "university of toronto",
    "collins aerospace",
    "digital technology",
    "software engineer",
  ],
  dateCreated: "2024-09-01", // YYYY-MM-DD
} satisfies User;
