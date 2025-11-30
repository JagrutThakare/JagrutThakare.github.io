import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Experience</h2>
                    <div className="experience-container">
                        {portfolioData.experience.map((exp, index) => (
                            <div key={index} className="glass experience-card" style={{ marginBottom: '2rem', padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>{exp.role}</h3>
                                    <span style={{ color: 'var(--text-secondary)' }}>{exp.duration}</span>
                                </div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{exp.company}</h4>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>{exp.location}</p>
                                {exp.description && <p style={{ marginBottom: '1rem' }}>{exp.description}</p>}
                                {exp.points && (
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                                        {exp.points.map((point, i) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
