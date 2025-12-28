import clsx from "clsx"
import Socials from "../Socials"

const FooterV2 = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-black">
              Siddharth Shivhare
            </h3>
            <p className="text-sm text-gray-500">
              MERN Stack Developer
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500">Socials</span>

            {/* ✅ IMPORTANT: NO PROPS PASSED */}
            <Socials />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Siddharth Shivhare. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default FooterV2
