// footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Himalaya Logo" className="h-12" />
        <div>
          <p className="text-sm">Powered by Techgun Nepal</p>
          <p className="text-sm">Cricket from the heart of the Nepal.</p>
          <p className="text-sm">
            Conquering peaks and pitches with unstoppable passion.
          </p>
        </div>
      </div>

      <div className="flex space-x-8">
        <div>
          <h3 className="text-blue-400 text-sm font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
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

      <div>
        <h3 className="text-sm font-bold mb-2">Contact</h3>
        <p className="text-sm">
          <a href="mailto:info@himalayanteam.com" className="hover:underline">
            info@himalayanteam.com
          </a>
        </p>
        <p className="text-sm">+977 9841234567</p>
        <p className="text-sm">Kathmandu, Nepal</p>
      </div>

      <div>
        <h3 className="text-sm font-bold mb-2">Follow Us</h3>
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

      <div className="text-sm">
        <p>Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
