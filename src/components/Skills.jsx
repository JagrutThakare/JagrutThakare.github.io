import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2rem' }}
                        >
                            <h3 style={{ textTransform: 'capitalize', marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.5rem' }}>
                                {category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={item}
                                        style={{
                                            background: 'rgba(56, 189, 248, 0.1)',
                                            color: 'var(--text-primary)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            border: '1px solid rgba(56, 189, 248, 0.2)'
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
