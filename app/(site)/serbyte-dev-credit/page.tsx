import { Metadata } from "next"

const PORTFOLIO_URL = "https://www.linkedin.com/in/siddharth-shivhare"
const COMPANY_URL = "https://github.com/siddharthshivhare"
const CREDIT_PATH = "/developer-credit"

export const metadata: Metadata = {
  title: "Web Development by Siddharth Shivhare · MERN Stack Developer",
  description:
    "Developer credit page for websites built by Siddharth Shivhare, a MERN Stack Developer specializing in React, Next.js, and Node.js.",
  alternates: { canonical: CREDIT_PATH },
}

export default function DeveloperCreditPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-gray-900">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">
          Developer Credit
        </p>

        <h1 className="text-2xl font-semibold">
          Web development by Siddharth Shivhare
        </h1>

        <p className="text-base text-gray-700">
          Crafted with React, Next.js, Node.js, and modern MERN stack
          technologies, focusing on performance, scalability, and clean UI.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-blue-700">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            View LinkedIn Profile
          </a>

          <span className="text-gray-400">•</span>

          <a
            href={COMPANY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </main>
  )
}
