import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'GitHub', href: 'https://github.com/WaseemAhmed376' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/waseem-ahmed-376' },
        { name: 'WhatsApp', href: 'https://wa.me/923247144941' },
        { name: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-dark border-t border-primary/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-secondary mb-4">Portfolio</h3>
            <p className="text-sand/60">
              Building beautiful, scalable web applications and automating workflows with n8n.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sand/60 hover:text-secondary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sand/60 text-sm md:text-center w-full md:w-auto">
            © {currentYear} Rana Waseem Ahmed. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/WaseemAhmed376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/60 hover:text-secondary transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/waseem-ahmed-376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/60 hover:text-secondary transition text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/923247144941"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/60 hover:text-secondary transition text-xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:rw3761840@gmail.com"
              className="text-sand/60 hover:text-secondary transition text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
