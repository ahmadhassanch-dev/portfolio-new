"use client"

import { useState } from 'react'
import Image from 'next/image'
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Globe, 
  Bot,
  Code,
  Database,
  Sparkles
} from 'lucide-react'
import styles from './Projects.module.css'

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot",
      description: "An intelligent conversational AI chatbot built with modern technologies, featuring real-time responses, natural language processing, and user-friendly interface.",
      technologies: ["React", "TypeScript", "OpenAI API", "Next.js"],
      github: "https://github.com/ahmadhassanch-dev/ai-chatbot",
      demo: "https://ai-chatbot-a61v.vercel.app/",
      category: "AI/ML",
      icon: Brain,
      colorClass: "purple",
      image: "/chatbot.png"
    },
    {
      title: "E-Commerce Store with Fake API",
      description: "A modern e-commerce platform built with Next.js, featuring product catalog, shopping cart, and checkout functionality using a fake API for demonstration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      github: "https://github.com/bilalpiaic/ecommerce",
      demo: "https://e-commerce-fakeapi-ehle.vercel.app/",
      category: "Web Dev",
      icon: Globe,
      colorClass: "blue",
      image: "/e-commercePic.png"
    },
    {
      title: "AI Code Generator",
      description: "An intelligent code generation tool that understands natural language and generates optimized code in multiple programming languages.",
      technologies: ["Python", "OpenAI", "LangGraph", "Streamlit"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI/ML",
      icon: Code,
      colorClass: "green"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A comprehensive dashboard for tracking user behavior, system performance, and business metrics with real-time updates.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web Dev",
      icon: Database,
      colorClass: "orange"
    },
    {
      title: "Multi-Agent AI System",
      description: "A sophisticated multi-agent system using LangGraph for complex task orchestration and autonomous decision-making.",
      technologies: ["Python", "LangGraph", "OpenAI", "Redis", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI/ML",
      icon: Bot,
      colorClass: "violet"
    },
    {
      title: "Smart Portfolio Website",
      description: "This very portfolio website built with modern technologies, featuring animations, responsive design, and optimized performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web Dev",
      icon: Sparkles,
      colorClass: "cyan"
    }
  ]

  const categories = ["All", "AI/ML", "Web Dev"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            My <span className={styles.titleHighlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A collection of projects showcasing my skills in AI development and web technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.filterContainer}>
          <div className={styles.filterWrapper}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.active : styles.inactive
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => {
            const ProjectIcon = project.icon
            return (
              <div key={project.title} className={styles.projectCard}>
                {/* Project Image */}
                <div className={`${styles.projectImage} ${styles[project.colorClass]}`}>
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={225}
                      className={styles.actualProjectImage}
                      priority={index === 0}
                    />
                  ) : (
                    <ProjectIcon className={styles.projectIcon} />
                  )}
                  <div className={`${styles.categoryBadge} ${styles[project.colorClass]}`}>
                    <ProjectIcon className={styles.badgeIcon} />
                  </div>
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <div className={styles.contentHeader}>
                    <span className={`${styles.categoryLabel} ${styles[project.colorClass]}`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className={styles.techList}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.actionButtons}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.codeButton}`}
                    >
                      <Github className={styles.buttonIcon} />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.demoButton}`}
                    >
                      <ExternalLink className={styles.buttonIcon} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Projects */}
        <div className={styles.viewMoreSection}>
          <a href="#" className={styles.viewMoreButton}>
            <Github className={styles.buttonIcon} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects