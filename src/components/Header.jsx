import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavClick =
    (section, shouldCloseMenu = false) =>
    (event) => {
      setActiveSection(section);

      if (event.currentTarget instanceof HTMLElement) {
        event.currentTarget.blur();
      }

      if (shouldCloseMenu) {
        setIsOpen(false);
      }
    };

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.to);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSection = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 4
      ) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection,
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header scrolled`}
    >
      <div className="container header-content">
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={handleNavClick(link.to)}
                  className={`nav-link ${
                    activeSection === link.to ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={handleNavClick(link.to, true)}
              className={activeSection === link.to ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
