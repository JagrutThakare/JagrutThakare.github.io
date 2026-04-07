import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass experience-card"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '520px' }}
                        >
                            <div style={{ marginBottom: '1rem', flexShrink: 0 }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--accent)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 'bold'
                                }}>
                                    {exp.company}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)', flexShrink: 0 }}>{exp.role}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', flexShrink: 0 }}>{exp.duration}</p>
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)', flexShrink: 0 }}>{exp.location}</p>

                            <div className="experience-card-scroll" style={{ overflowY: 'auto', flex: 1, paddingRight: '0.5rem' }}>
                                {exp.description && (
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: exp.points ? '1.5rem' : 0 }}>
                                        {exp.description}
                                    </p>
                                )}

                                {exp.points && (
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem' }}>
                                        {exp.points.map((point, i) => (
                                            <li key={i} style={{ marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
