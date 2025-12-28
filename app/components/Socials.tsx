import Link from "next/link"
import clsx from "clsx"
import type { Variants } from "motion"
import { MotionDiv } from "../utils/lazy-ui"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

/* ================= ANIMATIONS ================= */
const container: Variants = {
  hidden: {
    x: -12,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      duration: 0.2,
    },
  },
}

const linkLogo: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

/* ================= SOCIAL LINKS ================= */
const SOCIAL_LINKS = [
  {
    href: "https://github.com/Sid-dev19",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/siddharth-shivhare-541b5a348/",
    Icon: FaLinkedinIn,
  },
]

/* ================= COMPONENT ================= */
const Socials = ({ className }: { className?: string }) => {
  return (
    <MotionDiv
      className={clsx("flex gap-2", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {SOCIAL_LINKS.map(({ href, Icon }, index) => (
        <MotionDiv key={index} variants={linkLogo}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="social-link"
            className="footer-link flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-110 hover:bg-black hover:text-white"
          >
            <Icon size={16} />
          </Link>
        </MotionDiv>
      ))}
    </MotionDiv>
  )
}

export default Socials
