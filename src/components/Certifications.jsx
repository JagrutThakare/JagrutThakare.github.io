import React from "react";
import { portfolioData } from "../data/portfolioData";
import Section from "./Section";

const Certifications = () => (
  <Section id="certifications" title="Certifications">
    <div className="cert-grid">
      {portfolioData.certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass cert-card"
        >
          <div className="cert-logo-wrapper">
            <img
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              loading="lazy"
              className="cert-logo-img"
            />
          </div>
          <div className="cert-info">
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
          </div>
        </a>
      ))}
    </div>
  </Section>
);

export default Certifications;
