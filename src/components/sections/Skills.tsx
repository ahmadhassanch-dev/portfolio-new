"use client"

import { useState, useEffect } from 'react'
import { 
  Code2, 
  Database, 
  Brain, 
  Globe, 
  Zap,
  FileCode,
  Bot,
  Layers
} from 'lucide-react'
import styles from './Skills.module.css'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillId = entry.target.getAttribute('data-skill-id')
          if (skillId) {
            setVisibleSkills(prev => ({ ...prev, [skillId]: true }))
          }
        }
      })
    })

    const skillElements = document.querySelectorAll('[data-skill-id]')
    skillElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      iconClass: styles.programmingIcon,
      skills: [
        { name: "TypeScript", level: 90, icon: FileCode },
        { name: "JavaScript", level: 95, icon: FileCode },
        { name: "Python", level: 85, icon: FileCode },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      iconClass: styles.webIcon,
      skills: [
        { name: "Next.js", level: 90, icon: Globe },
        { name: "React", level: 88, icon: Globe },
        { name: "Node.js", level: 80, icon: Database },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      iconClass: styles.aiIcon,
      skills: [
        { name: "LangChain", level: 85, icon: Bot },
        { name: "LangGraph", level: 80, icon: Layers },
        { name: "OpenAI SDK", level: 88, icon: Zap },
      ]
    }
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            My <span className={styles.titleHighlight}>Skills</span>
          </h2>
          <p className={styles.subtitle}>
            Technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={category.title} className={styles.skillCategory}>
                <div className={styles.categoryHeader}>
                  <div className={`${styles.categoryIcon} ${category.iconClass}`}>
                    <CategoryIcon size={24} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    const skillId = `${categoryIndex}-${skillIndex}`
                    return (
                      <div key={skill.name} className={styles.skillItem} data-skill-id={skillId}>
                        <div className={styles.skillHeader}>
                          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                            <SkillIcon size={16} />
                            <span className={styles.skillName}>{skill.name}</span>
                          </div>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progressFill}
                            style={{
                              width: visibleSkills[skillId] ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className={styles.techStack}>
          <div className={styles.stackHeader}>
            <h3 className={styles.stackTitle}>Tools & Technologies</h3>
            <p className={styles.stackSubtitle}>Technologies I work with regularly</p>
          </div>
          
          <div className={styles.techGrid}>
            {[
              { name: "Git", icon: Code2 },
              { name: "Docker", icon: Database },
              { name: "VS Code", icon: FileCode },
              { name: "PostgreSQL", icon: Database },
              { name: "MongoDB", icon: Database },
              { name: "Redis", icon: Zap },
              { name: "AWS", icon: Globe },
              { name: "Vercel", icon: Globe },
              { name: "Tailwind", icon: Layers },
              { name: "Prisma", icon: Database },
              { name: "Supabase", icon: Database },
              { name: "OpenAI", icon: Brain },
            ].map((tech, index) => {
              const TechIcon = tech.icon
              return (
                <div key={tech.name} className={styles.techItem}>
                  <TechIcon className={styles.techIcon} />
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills