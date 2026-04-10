import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass project-card"
            >
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-techs">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline project-link"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary project-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
