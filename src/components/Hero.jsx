import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const Hero = () => {
  const { name, location, resumeUrl, logo } = portfolioData.personalInfo;
  const { github, linkedin, codechef } = portfolioData.socialLinks;

  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-logo"
        >
          <div className="logo-wrapper animate-float">
            <div className="spinning-border animate-spin-slow" />
            <div className="spinning-border-2 animate-spin-slow" />
            <img
              src={logo}
              alt="Logo"
              fetchpriority="high"
              loading="eager"
              className="hero-logo-img"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h2 className="hero-greeting">Hello, I'm</h2>
          <h1 className="hero-name">{name}</h1>
          <h3 className="hero-subtitle">
            Flexible Developer &amp; AI/ML Enthusiast
          </h3>
          <p className="hero-description">
            Based in {location}. I build modern web applications and explore the
            depths of Machine Learning.
          </p>

          <div className="hero-social-links">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={30} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <SiCodechef size={30} />
            </a>
          </div>

          <a
            href={resumeUrl}
            download
            className="btn btn-primary hero-resume-btn"
          >
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
