"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { m, AnimatePresence } from "framer-motion"

import { H3, Text } from "@/app/ui/Elements"
import { MotionDiv } from "@/app/utils/lazy-ui"
import profilePhoto from "../../public/profile.jpg"
import { SITE_NAP } from "@/config/siteConfig"
import { Mail } from "@react-zero-ui/icon-sprite"
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"
import { WhiteButtonLink } from "./ui/WhiteButtonLink"

/* ================= ROLE WORDS ================= */
const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
]

export const RecruiterContact: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="scroll-mt-20 border-t border-gray-200">
      <div className="inside-container-small">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-1 mx-auto flex w-full max-w-2xl flex-col items-center gap-8 rounded-2xl border border-gray-300 bg-white p-6 max-lg:text-center sm:p-8"
        >
          {/* ================= PROFILE ================= */}
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-4 ring-slate-200">
              <Image
                src={profilePhoto}
                alt="Siddharth Shivhare"
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col text-sm text-slate-700">
              <h2 className="font-medium text-slate-900">
                Siddharth Shivhare
              </h2>

              {/* ===== ROTATING ROLE ===== */}
              <div className="relative h-[20px] w-[210px] overflow-hidden whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <m.span
                    key={roles[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute left-0 top-0 text-slate-500 whitespace-nowrap"
                  >
                    {roles[index]}
                  </m.span>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ================= HEADING ================= */}
          <div className="flex flex-col items-center gap-4">
            <H3 className="text-center font-normal tracking-tight">
              Building Something Impactful? <br />
              <span className="text-slate-500">Let&apos;s connect.</span>
            </H3>

            <Text className="max-w-2xl text-center">
              I build scalable, performance-focused web applications using
              React, Next.js, Node.js, MongoDB, and SQL. I&apos;m open to
              full-time roles and impactful projects where clean architecture,
              performance, and user experience matter.
            </Text>
          </div>

          {/* ================= CTA BUTTONS ================= */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=shivsid17@gmail.com&su=Job%20Opportunity&body=Hi%20Siddharth,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:scale-105"
            >
              <Mail className="h-[18px] w-[18px] text-white" />
              Email me
            </a>

            {/* LinkedIn */}
            <WhiteButtonLink href={SITE_NAP.profiles.linkedIn}>
              <FaLinkedinIn size={18} />
              LinkedIn
            </WhiteButtonLink>

            {/* GitHub */}
            <WhiteButtonLink href={SITE_NAP.profiles.github}>
              <FaGithub size={18} />
              GitHub
            </WhiteButtonLink>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
