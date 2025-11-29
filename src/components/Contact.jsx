import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const { email, location } = portfolioData.personalInfo;

    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass"
                    style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', textAlign: 'center' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '2rem' }}>Get In Touch</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', width: '100%', justifyContent: 'center' }}>
                            <FaEnvelope style={{ color: 'var(--accent)', flexShrink: 0 }} />
                            <a href={`mailto:${email}`} className="hover:text-accent break-all">{email}</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--accent)' }} />
                            <span>{location}</span>
                        </div>
                    </div>

                    <a href={`mailto:${email}`} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
