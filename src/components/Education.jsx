import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Section from './Section';

const Education = () => (
    <Section id="education" title="Education" className="education-section">
        <div className="education-grid">
            {portfolioData.education.map((edu, index) => (
                <div key={index} className="glass education-card">
                    {edu.logo && (
                        <div className="education-logo-wrapper">
                            <img src={edu.logo} alt={`${edu.institution} logo`} className="education-logo-img" />
                        </div>
                    )}
                    <div>
                        <h3 className="education-institution">{edu.institution}</h3>
                        <h4 className="education-degree">{edu.degree}</h4>
                        <p className="education-meta">{edu.grade}</p>
                        <p className="education-meta">{edu.duration}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

export default Education;
