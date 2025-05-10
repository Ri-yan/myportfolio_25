import { Github as GitHub, Linkedin, Twitter, Mail } from "lucide-react";
import { useSelector } from "react-redux";
import { selectAppData, selectFooterData } from "../store/slices/staticDataSlice";
import { link } from "framer-motion/client";

const Footer = () => {
  const year = new Date().getFullYear();
  const footerData = useSelector(selectFooterData);
  const appData = useSelector(selectAppData);
  return (
    <footer className="py-10 bg-gray-900 dark:bg-navy-dark text-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                {appData?.logoText}
              </h3>
              <p className="text-gray-400 mb-6">
                {footerData?.description ||
                  "Your tagline or description goes here."}
              </p>
              <div className="flex space-x-4">
                <a
                  href={
                    footerData.socialLinks.find(
                      (link) => link.platform === "GitHub"
                    )?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-default transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href={
                    footerData.socialLinks.find(
                      (link) => link.platform === "LinkedIn"
                    )?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-default transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={
                    footerData.socialLinks.find(
                      (link) => link.platform === "Twitter"
                    )?.url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-default transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={
                    footerData.socialLinks.find(
                      (link) => link.platform === "Email"
                    )?.url
                  }
                  className="text-gray-400 hover:text-teal-default transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerData?.quickLinks?.map((link) => {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-teal-default transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Me
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" />
                  <a
                    href={`mailto:${footerData?.contactme.email}`}
                    className="hover:text-teal-default transition-colors"
                  >
                    {footerData?.contactme.email}
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <Linkedin size={16} className="mr-2" />
                  <a
                    href={`https://${footerData.contactme.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-default transition-colors"
                  >
                    {footerData?.contactme.linkedin}
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <GitHub size={16} className="mr-2" />
                  <a
                    href={`https://${footerData.contactme.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-default transition-colors"
                  >
                    {footerData?.contactme.github}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {year} {appData?.ownerName} All rights reserved.</p>
            <p className="mt-1">
              Designed & Built with <span className="text-red-500">❤</span> by
              Mohd. Riyan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
