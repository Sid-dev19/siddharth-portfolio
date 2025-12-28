"use client"

import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"

/* ===================== PROJECT IMAGES ===================== */
import jobspiderPreview from "@/app/images/JobSpider.png"
import pintoraPreview from "@/app/images/Pintora.png"
import restrobuddyPreview from "@/app/images/restrobuddy.png"
import shubhtripPreview from "@/app/images/shubdeep.png"

/* ===================== PROJECT IDS ===================== */
const ids = ["jobspider", "pintora", "restrobuddy", "shubhtrip"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)

  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8

  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })

  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90
  const progress = useSpring(scrollYProgress, { stiffness, damping })

  /* ===================== OFFSET TUNING ===================== */
  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    jobspider: {
      rot: 8,
      s: responsiveScale,
      dx: isMobile ? -220 : -40,
      dy: isMobile ? -120 : -30,
    },
    pintora: {
      rot: -6,
      s: responsiveScale,
      dx: isMobile ? -230 : -60,
      dy: isMobile ? -130 : -35,
    },
    restrobuddy: {
      rot: 6,
      s: responsiveScale,
      dx: isMobile ? -225 : -45,
      dy: isMobile ? -125 : -25,
    },
    shubhtrip: {
      rot: 10,
      s: responsiveScale,
      dx: isMobile ? -230 : -50,
      dy: isMobile ? -110 : -15,
    },
  }

  /* ===================== SAFE OFFSETS (FIX) ===================== */
  const offsets: Record<string, HeroOffset> = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets?.[id]
      const tune = OFFSET_TUNING[id]

      // ⛔ IMPORTANT: guard undefined offsets
      if (!base || !tune) {
        return [
          id,
          {
            x: 0,
            y: 0,
            rot: 0,
            s: 1,
          },
        ]
      }

      return [
        id,
        {
          x: base.x + (tune.dx ?? 0),
          y: base.y + (tune.dy ?? 0),
          rot: tune.rot ?? 0,
          s: tune.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5

  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      setReveal(latest >= triggerProgress ? "true" : "false")
    })
    return unsubscribe
  }, [progress, setReveal, triggerProgress])

  return (
    <section
      id="projects-grid"
      ref={ref}
      className={clsx("relative scroll-mt-36", className)}
    >
      <div className="relative z-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">

        <AnimatedCard
          src={jobspiderPreview}
          alt="JobSpider Job Portal Web Application Preview"
          offset={offsets.jobspider}
          gridId="jobspider"
          color="#0F172A"
          type="Job Portal Web Application"
          progress={progress}
          href="https://jobspider-frontend.vercel.app/"
          dataText="View Live"
        />

        

        <AnimatedCard
          src={restrobuddyPreview}
          alt="RestroBuddy Restaurant Billing & POS System Preview"
          offset={offsets.restrobuddy}
          gridId="restrobuddy"
          color="#7C3AED"
          type="Restaurant Billing & POS System"
          progress={progress}
          href="https://restrobuddy.in/"
          dataText="View Website"
        />

        <AnimatedCard
          src={shubhtripPreview}
          alt="ShubhTrip Travels Tour and Travel Website Preview"
          offset={offsets.shubhtrip}
          gridId="shubhtrip"
          color="#13739C"
          type="Travel & Tour Booking Website"
          progress={progress}
          href="https://www.shubhtriptravels.com/"
          dataText="View Website"
        />
        <AnimatedCard
          src={pintoraPreview}
          alt="Pintora MERN Stack E-Commerce Application Preview"
          offset={offsets.pintora}
          gridId="pintora"
          color="#2563EB"
          type="MERN Stack E-Commerce Application"
          progress={progress}
          href="https://github.com/Sid-dev19/pintora-frontend"
          dataText="View on GitHub"
        />

      </div>
    </section>
  )
}
