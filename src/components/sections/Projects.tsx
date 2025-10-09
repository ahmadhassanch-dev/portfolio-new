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
  Sparkles,
  ChevronDown
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
      image: "/chatbot.png",
      emoji: "🤖"
    },
    {
      title: "E-Commerce Store with Fake API",
      description: "A modern e-commerce platform built with Next.js, featuring product catalog, shopping cart, and checkout functionality using a fake API for demonstration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      github: "https://github.com/ahmadhassanch-dev/e-commerce-fakeapi",
      demo: "https://e-commerce-fakeapi-ehle.vercel.app/",
      category: "Web Dev",
      icon: Globe,
      colorClass: "blue",
      image: "/e-commercePic.png",
      emoji: "🛒"
    },
    {
      title: "AI Code Generator",
      description: "An intelligent code generation tool that understands natural language and generates optimized code in multiple programming languages with real-time preview.",
      technologies: ["React", "TypeScript", "OpenAI API", "Next.js"],
      github: "https://github.com/ahmadhassanch-dev/code-generator",
      demo: "https://code-generator-weld.vercel.app/",
      category: "AI/ML",
      icon: Code,
      colorClass: "green",
      image: "/code-generator.png",
      emoji: "⚡"
    },
    {
      title: "Programming Communities",
      description: "An online platform for developers to connect, share knowledge, and collaborate on projects within various programming communities.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "https://programing-communities.vercel.app/",
      category: "Web Dev",
      icon: Globe,
      colorClass: "blue",
      image: "/image.png",
      emoji: "👥"
    }
  ]

  const categories = ["All", "AI/ML", "Web Dev"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [isLiveDropdownOpen, setIsLiveDropdownOpen] = useState(false)

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
              <div key={project.title} className={`${styles.projectCard} ${project.title.includes("E-Commerce") ? styles.ecommerceCard : ""}`}>
                {/* Project Image */}
                <div className={`${styles.projectImage} ${styles[project.colorClass]}`}>
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={280}
                      className={styles.actualProjectImage}
                      priority={index === 0}
                    />
                  ) : (
                    <ProjectIcon className={styles.projectIcon} />
                  )}
                  
                  {/* Animated Emoji */}
                  <div className={styles.emojiContainer}>
                    <span className={styles.projectEmoji}>{project.emoji}</span>
                  </div>

                  <div className={`${styles.categoryBadge} ${styles[project.colorClass]}`}>
                    <ProjectIcon className={styles.badgeIcon} />
                  </div>
                </div>

                {/* Bottom Content that expands on hover */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>

                  {/* Content that appears on hover */}
                  <div className={styles.expandedContent}>
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
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Projects */}
        <div className={styles.viewMoreSection}>
          <div className={styles.buttonGroup}>
            <a href="https://github.com/ahmadhassanch-dev?tab=repositories" className={styles.viewMoreButton}>
              <Github className={styles.buttonIcon} />
              See All Projects
            </a>
            <div className={styles.dropdownContainer}>
              <button 
                onClick={() => setIsLiveDropdownOpen(!isLiveDropdownOpen)}
                className={`${styles.viewMoreButton} ${styles.liveProjectsButton}`}
              >
                <ExternalLink className={styles.buttonIcon} />
                See Live Projects
                <ChevronDown className={`${styles.chevronIcon} ${isLiveDropdownOpen ? styles.rotated : ''}`} />
              </button>
              {isLiveDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {projects.map((project) => (
                    <a
                      key={project.title}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dropdownItem}
                    >
                      <span className={styles.projectEmoji}>{project.emoji}</span>
                      <span>{project.title}</span>
                      <ExternalLink className={styles.dropdownIcon} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects