import Link from "next/link"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

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
const Socials = () => {
  return (
    <div className="flex gap-2">
      {SOCIAL_LINKS.map(({ href, Icon }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="social-link"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-110 hover:bg-black hover:text-white"
        >
          <Icon size={16} />
        </Link>
      ))}
    </div>
  )
}

export default Socials
