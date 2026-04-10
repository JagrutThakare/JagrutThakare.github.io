import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Section from './Section';

const Contact = () => {
    const { email, location } = portfolioData.personalInfo;

    return (
        <Section id="contact" title="Get In Touch" className="contact-section">
            <div className="glass contact-card">
                <p className="contact-subtitle">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="contact-info">
                    <div className="contact-row">
                        <FaEnvelope className="contact-icon" />
                        <a href={`mailto:${email}`} className="break-all">{email}</a>
                    </div>
                    <div className="contact-row">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span>{location}</span>
                    </div>
                </div>
                <a href={`mailto:${email}`} className="btn btn-primary contact-cta">Say Hello</a>
            </div>
        </Section>
    );
};

export default Contact;
