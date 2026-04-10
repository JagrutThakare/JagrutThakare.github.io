import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-grid">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass experience-card"
                        >
                            <span className="experience-company">{exp.company}</span>
                            <h3 className="experience-role">{exp.role}</h3>
                            <p className="experience-duration">{exp.duration}</p>
                            <p className="experience-location">{exp.location}</p>

                            <div className="experience-scroll experience-card-scroll">
                                {exp.description && (
                                    <p className={`experience-description${exp.points ? ' has-points' : ''}`}>
                                        {exp.description}
                                    </p>
                                )}
                                {exp.points && (
                                    <ul className="experience-points">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="experience-point">{point}</li>
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
