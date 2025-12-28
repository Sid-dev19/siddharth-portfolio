import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import { Link } from "@/app/utils/Link"

/* ===================== PROJECT IMAGES ===================== */
import portfolioPreview from "@/images/JobSpider.png"
import ecommercePreview from "@/images/Pintora.png"
import shubdeep from "@/images/shubdeep.png"
import restrobuddy from "@/images/restrobuddy.png"

/* ===================== TYPES ===================== */
type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

/* ===================== PROJECT DATA ===================== */
export const STATIC_PROJECTS: StaticProject[] = [
  {
  id: "jobspider-job-portal",
  src: portfolioPreview,
  alt: "JobSpider Job Portal Website Preview",
  color: "#0F172A",
  type: "Job Portal Web Application",
  text: "View Live",
  href: "https://jobspider-frontend.vercel.app/",
  dataText: "View Live",
  ariaLabel: "View JobSpider Job Portal Website",
  isExternal: true,
},
  {
  id: "pintora-ecommerce",
  src: ecommercePreview,
  alt: "Pintora E-Commerce Web Application Preview",
  color: "#2563EB",
  type: "MERN Stack E-Commerce Application",
  text: "View on GitHub",
  href: "https://github.com/Sid-dev19/pintora-frontend",
  dataText: "View on GitHub",
  ariaLabel: "View Pintora E-Commerce Project on GitHub",
  isExternal: true,
},

 {
  id: "shubhtrip-travels",
  src: shubdeep,
  alt: "ShubhTrip Travels Website Preview",
  color: "#7C3AED",
  type: "Travel & Tour Booking Website",
  text: "View Website",
  href: "https://www.shubhtriptravels.com/",
  dataText: "View Website",
  ariaLabel: "View ShubhTrip Travels Tour and Travel Website",
  isExternal: true,
},

  {
  id: "restrobuddy-pos",
  src: restrobuddy,
  alt: "RestroBuddy Restaurant Billing POS Web Application Preview",
  color: "#7C3AED",
  type: "Restaurant Billing & POS System",
  text: "View Live",
  href: "https://restrobuddy.in/",
  dataText: "View Live",
  ariaLabel: "View RestroBuddy Restaurant Billing and POS System",
  isExternal: true,
},
]

/* ===================== COMPONENT ===================== */
export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link

            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card
                  src={project.src}
                  alt={project.alt}
                  color={project.color}
                  type={project.type}
                  reveal={false}
                  text={project.text}
                />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
