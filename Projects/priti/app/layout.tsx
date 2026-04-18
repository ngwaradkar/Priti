import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priti Waradkar | Senior QA Engineer | Selenium & Appium Automation",
  description:
    "5+ years QA automation expertise. Selenium, Appium, BDD Cucumber, API testing, AI-driven test design. 0 escaped defects. 247+ tests automated. Available for hire in Pune.",
  keywords: [
    "Senior QA Engineer",
    "Selenium Automation",
    "Appium Mobile Testing",
    "BDD Cucumber",
    "API Testing",
    "Postman",
    "Jenkins CI/CD",
    "Manual Testing",
    "Priti Waradkar",
    "QA Engineer Pune",
  ],
  authors: [{ name: "Priti Waradkar" }],
  openGraph: {
    title: "Priti Waradkar | Senior QA Engineer",
    description:
      "5+ years delivering bug-free software across web, mobile & API. AI-enhanced automation expert. Based in Pune, India.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Priti Waradkar",
  jobTitle: "Senior QA Engineer",
  description:
    "Senior QA Engineer with 5+ years expertise in Selenium, Appium, BDD Cucumber, API Testing, CI/CD, and AI-driven test automation.",
  email: "pritidandvate97@gmail.com",
  telephone: "+91-7057264071",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: ["https://linkedin.com/in/priti-dandvate"],
  knowsAbout: [
    "Selenium",
    "Appium",
    "BDD Cucumber",
    "API Testing",
    "Manual Testing",
    "QA Automation",
    "Jenkins CI/CD",
    "Azure DevOps",
    "Postman",
    "Rest Assured",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${firaCode.variable} antialiased bg-[#050d0f] text-[#e8f4f6]`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
