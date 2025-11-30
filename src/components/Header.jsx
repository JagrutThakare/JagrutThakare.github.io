import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

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
                    <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    activeClass="active"
                                    style={{ cursor: 'pointer' }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
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
                            onClick={() => setIsOpen(false)}
                            style={{ cursor: 'pointer' }}
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
