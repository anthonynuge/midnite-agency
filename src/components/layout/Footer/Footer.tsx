// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side: Branding & Contact */}
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between space-y-4">
          <Image src="/MidniteLogo.png" width={50} height={50} alt="Midnite" />
          <div>
            <h2 className="text-white text-lg font-semibold mb-2">
              Incredible, such creativity!
            </h2>
            <p className="text-sm text-gray-400">
              Helping brands explore, create, and evolve their digital presence
              with strategy, story & soul.
            </p>
          </div>

          <div>
            <p className="text-sm mt-4">info@midnite.agency</p>
            <div className="flex space-x-3 mt-2">
              <a href="#">
                <InstagramIcon size={18} />
              </a>
              <a href="#">
                <LinkedinIcon size={18} />
              </a>
              <a href="#">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-start-3">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mt-0 md:mt-16">
            {/* Home Links */}
            <div>
              <h4 className="text-white font-medium mb-1 md:mb-2">Home</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/awards" className="hover:text-white">
                    Awards
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            {/* Services Links */}
            <div>
              <h4 className="text-white font-medium mb-1 md:mb-2">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/branding" className="hover:text-white">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/services/content" className="hover:text-white">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="/services/strategy" className="hover:text-white">
                    Strategy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links*/}
            <div>
              <h4 className="text-white font-medium mb-1 md:mb-2">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases" className="hover:text-white">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-xs text-gray-500">
        © {new Date().getFullYear()} Midnite Agency. All rights reserved.
      </div>
    </footer>
  );
}
