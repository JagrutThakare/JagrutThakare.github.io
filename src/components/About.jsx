import React from "react";
import { portfolioData } from "../data/portfolioData";
import Section from "./Section";

const About = () => (
  <Section id="about" title="About Me">
    <div className="glass about-glass">
      <p className="about-text">{portfolioData.personalInfo.summary}</p>
    </div>
  </Section>
);

export default About;
