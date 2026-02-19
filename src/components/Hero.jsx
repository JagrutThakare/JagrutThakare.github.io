import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';

const Hero = () => {
    const { name, location, resumeUrl, logo } = portfolioData.personalInfo;
    const { github, linkedin, codechef } = portfolioData.socialLinks;

    return (
        <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
            <div className="container hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '4rem', maxWidth: '1600px' }}>

                {/* Logo Section (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-logo"
                    style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
                >
                    <div className="logo-wrapper animate-float" style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className="spinning-border animate-spin-slow" style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '2px solid transparent',
                            borderTopColor: 'var(--primary)',
                            borderBottomColor: 'var(--accent)',
                            borderLeftColor: 'var(--primary)',
                            opacity: 0.5
                        }}></div>
                        <div className="spinning-border-2 animate-spin-slow" style={{
                            position: 'absolute',
                            width: '90%',
                            height: '90%',
                            borderRadius: '50%',
                            border: '2px solid transparent',
                            borderRightColor: 'var(--accent)',
                            borderLeftColor: 'var(--primary)',
                            animationDirection: 'reverse',
                            opacity: 0.3
                        }}></div>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: '200px',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.3))',
                                zIndex: 1
                            }}
                        />
                    </div>
                </motion.div>

                {/* Text Section (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '1rem' }}>Hello, I'm</h2>
                    <h1 style={{ fontSize: '4rem', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.1' }}>
                        {name}
                    </h1>
                    <h3 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Full Stack Developer & ML Enthusiast
                    </h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '1000px', marginBottom: '2rem' }}>
                        Based in {location}. I build modern web applications and explore the depths of Machine Learning.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaGithub size={30} />
                        </a>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaLinkedin size={30} />
                        </a>
                        <a href={codechef} target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SiCodechef size={30} />
                        </a>
                    </div>

                    <a href={resumeUrl} download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaDownload /> Download Resume
                    </a>
                </motion.div>
            </div>
            <style>{`
        .social-icon {
          color: var(--text-secondary);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-icon:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-content {
            align-items: center !important;
          }
          .logo-wrapper {
            width: 250px !important;
            height: 250px !important;
            margin-bottom: 2rem;
          }
          .hero-logo {
            margin-bottom: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
