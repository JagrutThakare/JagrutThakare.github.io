import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, className = '', children }) => (
    <section id={id} className={`section ${className}`}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {title && <h2 className="section-title">{title}</h2>}
                {children}
            </motion.div>
        </div>
    </section>
);

export default Section;
