import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SkillBadge = ({ skill, variants }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.span
                variants={variants}
                style={{
                    display: 'inline-block',
                    background: isHovered ? 'rgba(56, 189, 248, 0.2)' : 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--text-primary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    transition: 'all 0.3s ease',
                    boxShadow: isHovered ? '0 0 15px rgba(56, 189, 248, 0.3)' : 'none',
                    cursor: 'pointer'
                }}
            >
                {skill.name}
            </motion.span>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 5, scale: 0.95, x: "-50%" }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            bottom: '125%',
                            background: 'black',
                            color: 'var(--text-primary)',
                            padding: '0.6rem 1rem',
                            borderRadius: '10px',
                            fontSize: '0.85rem',
                            minWidth: '220px',
                            textAlign: 'center',
                            zIndex: 100,
                            border: '1px solid rgba(56, 189, 248, 0.5)',
                            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                            pointerEvents: 'none',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)'
                        }}
                    >
                        <div style={{ fontWeight: '600', marginBottom: '0.3rem', color: 'var(--accent)' }}>{skill.name}</div>
                        <div style={{ lineHeight: '1.4', opacity: 0.9 }}>{skill.info}</div>
                        <div style={{
                            position: 'absolute',
                            bottom: '-6px',
                            left: '50%',
                            transform: 'translateX(-50%) rotate(45deg)',
                            width: '12px',
                            height: '12px',
                            background: 'var(--bg-secondary)',
                            borderRight: '1px solid rgba(56, 189, 248, 0.5)',
                            borderBottom: '1px solid rgba(56, 189, 248, 0.5)',
                            zIndex: -1
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </a>
    );
};

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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2.5rem 2rem' }}
                        >
                            <h3 style={{ textTransform: 'capitalize', marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.5rem', borderBottom: '2px solid rgba(56, 189, 248, 0.1)', paddingBottom: '0.5rem' }}>
                                {category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {items.map((skill) => (
                                    <SkillBadge key={skill.name} skill={skill} variants={item} />
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
