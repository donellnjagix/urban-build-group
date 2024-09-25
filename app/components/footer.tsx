import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="footer-logo">
          <Image
            src="/images/logo.webp" // Replace with your logo path
            alt="Urban Build Group Logo"
            width={150}
            height={75}
          />
          <p className="mt-4 text-gray-300">
            Building a better future, one project at a time.
          </p>
        </div>

        {/* Sitemap Section */}
        <div className="footer-sitemap">
          <h3 className="text-2xl font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-300 hover:text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-300 hover:text-white">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="text-gray-300 hover:text-white">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-300 hover:text-white">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Phone: </span>+123-456-7890
            </li>
            <li>
              <span className="font-bold">Email: </span>
              <a
                href="mailto:info@urbanbuildgroup.com"
                className="text-gray-300 hover:text-white"
              >
                info@urbanbuildgroup.com
              </a>
            </li>
            <li>
              <span className="font-bold">Address: </span>123 Main St, Nairobi, Kenya
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com" // Replace with your company's Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a
                href="https://twitter.com" // Replace with your company's Twitter URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://linkedin.com" // Replace with your company's LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
              <a
                href="https://instagram.com" // Replace with your company's Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-600 mt-8">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Urban Build Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
