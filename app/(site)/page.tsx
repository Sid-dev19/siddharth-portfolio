import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { RecruiterContact } from "../components/RecruiterContact"

import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"
import Script from "next/script"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Explore the portfolio of Siddharth Shivhare, a MERN Stack Developer specializing in React, Next.js, Node.js, and scalable full-stack web applications. View real-world projects, modern UI, and clean architecture.",

  keywords: [
    "Siddharth Shivhare",
    "MERN Stack Developer",
    "React Developer Portfolio",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Web Developer",
    "JavaScript Developer",
    "TypeScript",
    "MongoDB",
    "SQL",
    "India",
    "Gwalior",
  ],

  authors: [{ name: "Siddharth Shivhare" }],
  creator: "Siddharth Shivhare",

  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      {/* SEO Structured Data */}
      <Script
        id="site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />

      <HeroV2 />

      <div className="border-b border-gray-200" />

      <ProjectsSection />

      <AboutSectionV2 />

      <ServicesSectionV2 />

      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}

export default PortfolioPage
