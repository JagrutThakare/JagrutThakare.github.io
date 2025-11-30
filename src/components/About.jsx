import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="glass" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                            {portfolioData.personalInfo.summary}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
