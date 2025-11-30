import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
    return (
        <section id="education" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Education</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {portfolioData.education.map((edu, index) => (
                            <div key={index} className="glass" style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{edu.institution}</h3>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                                <p style={{ color: 'var(--text-secondary)' }}>{edu.grade}</p>
                                <p style={{ color: 'var(--text-secondary)' }}>{edu.duration}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
