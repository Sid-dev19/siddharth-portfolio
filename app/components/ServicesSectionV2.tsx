"use client"

import clsx from "clsx"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { m } from "motion/react"
import { MotionUl, MotionLi } from "../utils/lazy-ui"
import { Download } from "lucide-react"

/* ===================== TECH ICONS ===================== */
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiFigma,
} from "react-icons/si"

/* ===================== SERVICE ICONS ===================== */
import {
  RiMagicLine,
  RiLayout4Line,
  RiSmartphoneLine,
  RiSecurePaymentLine,
} from "react-icons/ri"
import { LuServer, LuShieldCheck } from "react-icons/lu"

/* ===================== TECH STACK ===================== */
const tech = [
  { name: "React", Icon: SiReact },
  { name: "React Native", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Redux", Icon: SiRedux },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Material UI", Icon: SiMui },
  { name: "Figma", Icon: SiFigma },
]

/* ===================== SERVICES ===================== */
const services = [
  { name: "Full Stack Development (MERN)", Icon: RiMagicLine },
  { name: "Frontend Development (React / Next.js)", Icon: RiLayout4Line },
  { name: "Mobile App Development (React Native)", Icon: RiSmartphoneLine },
  { name: "Backend & REST API Development", Icon: LuServer },
  { name: "Responsive Web Design", Icon: RiLayout4Line },
  { name: "JWT Authentication & Security", Icon: LuShieldCheck },
  { name: "Payment Gateway Integration", Icon: RiSecurePaymentLine },
]

/* ===================== EXPERIENCE ===================== */
const experience = [
  {
    company: "Simplifying Skills – Transforming Education",
    total: "10 mos",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        duration: "Jun 2025 – Present · 7 mos",
        location: "Gurugram, Haryana, India · On-site",
      },
      {
        title: "Software Engineer Trainee",
        type: "Trainee",
        duration: "Mar 2025 – Jun 2025 · 4 mos",
        location: "Delhi, India · Remote",
      },
    ],
  },
  {
    company: "Numeric Infosystem Pvt. Ltd.",
    total: "10 mos",
    roles: [
      {
        title: "Junior Software Developer",
        type: "Full-time",
        duration: "Jun 2024 – Mar 2025 · 10 mos",
        location: "Gwalior, Madhya Pradesh, India · On-site",
      },
    ],
  },
]

/* ===================== ANIMATIONS ===================== */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: "easeOut" },
  },
}

/* ===================== COMPONENT ===================== */
export const ServicesSectionV2: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section
      id="technologies"
      className={clsx(
        "inside-container relative z-2 flex flex-col gap-32",
        className
      )}
    >
      {/* ================= TECH + SERVICES ================= */}
      <div className="flex items-start justify-center gap-24 max-md:flex-col">
        {/* LEFT */}
        <div className="flex flex-col gap-16 md:[flex:2]">
          <AnimatedH2>
            Engineering <br />
            <span className="text-slate-500">Toolkit</span>
          </AnimatedH2>

          <Text size="base" className="text-slate-500">
            Technologies I use to build modern, scalable web & mobile applications
          </Text>

          <MotionUl
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-8"
          >
            {tech.map(({ name, Icon }) => (
              <MotionLi key={name} variants={fadeUp}>
                <div className="group relative">
                  <div className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border bg-white transition hover:-translate-y-1">
                    <Icon size={28} />
                  </div>
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-black px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                    {name}
                  </span>
                </div>
              </MotionLi>
            ))}
          </MotionUl>
        </div>

        {/* RIGHT */}
        <MotionUl
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:[flex:1]"
        >
          {services.map(({ name, Icon }) => (
            <MotionLi
              key={name}
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <span className="button-shadow flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <Icon size={20} />
              </span>
              <Text size="sm">{name}</Text>
            </MotionLi>
          ))}
        </MotionUl>
      </div>

      {/* ================= EXPERIENCE + RESUME ================= */}
      <div
        id="experience"
        className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-20 items-start"
      >
        {/* EXPERIENCE LIST */}
        <div className="flex flex-col gap-16">
          <AnimatedH2>
            Professional <br />
            <span className="text-slate-500">Experience</span>
          </AnimatedH2>

          <MotionUl
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {experience.map((company) => (
              <MotionLi key={company.company} variants={fadeUp}>
                <div className="flex items-start gap-4">
                  <div className="relative mt-2">
                    <span className="block h-3 w-3 rounded-full bg-slate-400" />
                    <span className="absolute left-1/2 top-3 h-full w-px -translate-x-1/2 bg-slate-200" />
                  </div>

                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {company.company}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {company.total}
                      </p>
                    </div>

                    {company.roles.map((role) => (
                      <div key={role.title} className="pl-4">
                        <p className="font-medium">{role.title}</p>
                        <p className="text-sm text-slate-500">{role.type}</p>
                        <p className="text-sm text-slate-500">
                          {role.duration}
                        </p>
                        <p className="text-sm text-slate-400">
                          {role.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionLi>
            ))}
          </MotionUl>
        </div>

        {/* RESUME CARD */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sticky top-32"
        >
          <m.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="group relative overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-xl p-8 shadow-xl"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-indigo-400 blur-3xl opacity-30" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-teal-400 blur-3xl opacity-30" />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Download Resume</h3>
                <p className="text-sm text-slate-500 mt-1">
                  MERN Stack Developer · React · Node · SQL
                </p>
              </div>

              <div className="grid grid-cols-3 text-center">
                <div>
                  <p className="text-lg font-semibold">1+</p>
                  <p className="text-xs text-slate-500">Years</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">MERN</p>
                  <p className="text-xs text-slate-500">Stack</p>
                </div>
              </div>

              <a
                href="/assets/Siddharth%20Shivhare(Mern%20Stack).pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-white transition hover:scale-[1.03]"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
