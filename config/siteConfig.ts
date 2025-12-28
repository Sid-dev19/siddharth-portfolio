export const DOMAIN_URL = process.env.NODE_ENV === 'production' 
  ? 'https://sid-dev19.github.io/portfolio-austin-serb-main'
  : 'http://localhost:3000'

export const SITE_CONFIG = {
  title: "Siddharth Shivhare - MERN Stack Developer | Portfolio",
  description: "Portfolio of Siddharth Shivhare, a passionate Full Stack Developer specializing in MERN stack. Building modern, scalable web applications with React, Node.js, and MongoDB.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Siddharth Shivhare",
  keywords: ["Siddharth Shivhare", "MERN Stack", "Full Stack Developer", "React", "Node.js", "MongoDB", "Next.js", "JavaScript", "Web Development"],
  ogImage: "/assets/og-image.jpg",
  logo: "/logo.png",
} as const

export const SITE_NAP = {
  name: "Siddharth Shivhare",
  googleBusinessType: "Person" as const,
  contact: "Siddharth Shivhare",
  contactTitle: "Full Stack Developer",
  email: "shivsid17@gmail.com",
  profiles: {
    linkedIn: "https://www.linkedin.com/in/siddharth-shivhare-541b5a348/",
    github: "https://github.com/Sid-dev19",
  } as const,
  logo: "/logo.png",
  favicon: "/favicon.ico",
  images: ["/assets/og-image.jpg"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about-austin-serb",  // This is the line to update
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
