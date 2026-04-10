import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const TooltipTriangle = () => <div className="tooltip-triangle" />;

const SkillBadge = ({ skill, variants }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-badge-link"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.span variants={variants} className="skill-badge">
                {skill.name}
            </motion.span>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                        animate={{ opacity: 1, y: 0,  scale: 1,    x: '-50%' }}
                        exit={{    opacity: 0, y: 5,  scale: 0.95, x: '-50%' }}
                        transition={{ duration: 0.2 }}
                        className="skill-tooltip"
                    >
                        <div className="skill-tooltip-title">{skill.name}</div>
                        <div className="skill-tooltip-info">{skill.info}</div>
                        <TooltipTriangle />
                    </motion.div>
                )}
            </AnimatePresence>
        </a>
    );
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0 }
};

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="glass skill-category"
                        >
                            <h3 className="skill-category-title">{category}</h3>
                            <div className="skill-badges">
                                {items.map((skill) => (
                                    <SkillBadge key={skill.name} skill={skill} variants={itemVariants} />
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
