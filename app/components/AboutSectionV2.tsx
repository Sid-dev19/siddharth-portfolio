import Image from "next/image"
import clsx from "clsx"
import profilePhoto from "../../public/assets/founder.jpg"
import signature from "../images/signature.png"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section
      id="about"
      className={clsx("border-y border-gray-200 bg-white", className)}
    >
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About Me</span>
          <br />
          Siddharth Shivhare
        </AnimatedH2>

        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- LEFT COLUMN ---------------- */}
          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* profile image */}
            <ImageReveal
              src={profilePhoto}
              alt="Siddharth Shivhare"
              className="custom-shadow aspect-[4/4.5]"
            />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Siddharth Shivhare
              </Text>
              <p className="text-sm text-gray-500">
                Full Stack Developer • MERN Stack
              </p>
            </MotionDiv>
          </div>

          {/* ---------------- RIGHT COLUMN ---------------- */}
          <Typography
            as="article"
            size="lg"
            className="[flex:1.5_0_0px] space-y-8 text-slate-600"
          >
            <p>
              <strong className="font-semibold text-slate-900">
                Hi 👋 I’m a passionate Full Stack Developer
              </strong>{" "}
              who loves building modern, scalable web applications. I enjoy
              turning ideas into{" "}
              <strong className="text-slate-900">
                functional and visually appealing digital products
              </strong>{" "}
              using the MERN stack.
            </p>

            <p>
              I’m currently focused on{" "}
              <strong className="text-slate-900">
                building responsive educational web applications
              </strong>{" "}
              using React, Node.js, and MongoDB. My goal is to create impactful
              solutions that enhance user experience and make technology
              accessible for everyone.
            </p>

            <p>
              I’m also exploring{" "}
              <strong className="text-slate-900">
                Generative AI integration
              </strong>{" "}
              and{" "}
              <strong className="text-slate-900">
                advanced system architecture
              </strong>{" "}
              to build scalable, future-ready full-stack applications.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">
                My development philosophy is simple
              </strong>
              : build fast, learn continuously, and refine relentlessly. I
              believe clean code, small iterations, and user-centric design
              create the best products.
            </p>

            <p>
              When I’m not coding, I enjoy exploring new technologies,
              contributing to projects, and sharing knowledge with the
              developer community. ⚡ Fun fact: I turn{" "}
              <em>“404 Not Found”</em> into{" "}
              <em>“Wow, look what I built!”</em> 😄
            </p>

            {/* signature */}
            {/* <Image
              src={signature}
              alt="Siddharth Shivhare Signature"
              className="relative mt-6 -ml-3 h-12 w-auto"
            /> */}
          </Typography>
        </div>
      </div>
    </section>
  )
}
