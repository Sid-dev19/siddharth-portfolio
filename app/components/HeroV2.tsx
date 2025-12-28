"use client"

import { useEffect, useState } from "react"
import { m, AnimatePresence } from "framer-motion"

import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"

/* ================= ROLE WORDS ================= */
const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",
]

// longest role for width reservation
const LONGEST_ROLE = "React & Node Specialist"

export const HeroV2 = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          {/* ================= AVAILABILITY ================= */}
          <AnimatedElement
            element="span"
            delay={0.6}
            className="z-2 inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg"
          >
            <ActivityDot />
            Available for opportunities
          </AnimatedElement>

          {/* ================= HERO TITLE ================= */}
          <h1 className="xs:text-5xl relative z-5 text-4xl font-medium leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {/* ===== NAME (SINGLE LINE) ===== */}
            <AnimatedElement
              element="span"
              offsetPx={20}
              fadeDirection="left"
              className="block whitespace-nowrap"
            >
              Siddharth Shivhare
            </AnimatedElement>

            {/* ===== ROTATING ROLE (SMALLER FONT) ===== */}
            <AnimatedElement
              element="span"
              delay={0.4}
              offsetPx={20}
              fadeDirection="left"
              className="
                block 
                whitespace-nowrap 
                font-normal 
                text-slate-600
                text-2xl            /* ⬅ smaller base */
                sm:text-3xl         /* ⬅ tablet */
                lg:text-4xl         /* ⬅ desktop */
              "
            >
              <span className="relative inline-block whitespace-nowrap">
                {/* invisible text for width */}
                <span className="invisible block">
                  {LONGEST_ROLE}
                </span>

                <AnimatePresence mode="wait">
                  <m.span
                    key={roles[index]}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-0 top-0 whitespace-nowrap"
                  >
                    {roles[index]}
                  </m.span>
                </AnimatePresence>
              </span>
            </AnimatedElement>
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <AnimatedElement
            element="p"
            delay={0.6}
            className="max-w-xs text-sm leading-snug tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base"
          >
            <strong className="font-semibold text-slate-900">
              Full Stack Developer
            </strong>{" "}
            specializing in the MERN stack. Passionate about building modern,
            scalable web applications with clean code and intuitive user
            experiences. Let&apos;s turn your ideas into reality!
          </AnimatedElement>

          <CallToActionButton />
        </div>

        {/* Don't remove this span */}
        <span
          data-stack-target-id
          className="xs:ml-[8%] [flex:1_0_0px] xs:mt-20 mt-24 ml-[4%] h-1 w-2 sm:mt-11 xl:ml-[16%]"
        />

        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
