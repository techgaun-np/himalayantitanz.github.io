// footer.tsx
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        fontFamily: "Open Sans, sans-serif",
      }}
      className="bg-gray-900 text-white py-8 px-6 "
    >
      <div className="container flex justify-between items-start">
        <div className="flex flex-col  items-start space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              width={48}
              height={48}
              src="/logo.png"
              alt="Himalaya Logo"
              className="h-28 w-28"
            />
            <div>
              <p className="text-base italic">Powered by Techgun Nepal</p>
            </div>
          </div>
          <div>
            <p className="text-base text-start">
              Cricket from the heart of the Nepal.
            </p>
            <p className="text-base text-start">
              Conquering peaks and pitches with unstoppable passion.
            </p>
          </div>
        </div>

        <div className="flex space-x-8">
          <div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1 grid grid-cols-2 gap-x-4 gap-y-2 text-base">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/squad" className="hover:underline">
                  Squad
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <h3 className="text-white text-2xl font-semibold mb-3">Contact</h3>
          <p className="text-base">
            <a href="mailto:info@himalayanteam.com" className="hover:underline">
              info@himalayanteam.com
            </a>
          </p>
          <p className="text-base mt-2">+977 9841234567</p>
          <p className="text-base mt-2">Kathmandu, Nepal</p>
        </div>

        <div className="">
          <h3 className="text-white text-2xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">f</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">t</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">@</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-sm mt-8 mb-2 text-center">
        <p>Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
