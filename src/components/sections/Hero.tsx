"use client"

import { useState, useEffect } from 'react'
import { 
  Code, 
  Brain, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  Sparkles
} from 'lucide-react'
import styles from './Hero.module.css'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['AI Developer', 'Web Developer', 'Full-Stack Engineer', 'Tech Enthusiast']

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  return (
    <section className={styles.hero}>
      {/* Background gradient */}
      <div className={styles.backgroundGradient}></div>
      
      {/* Animated background elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.floatingElement} ${styles.element1}`}></div>
        <div className={`${styles.floatingElement} ${styles.element2}`}></div>
        <div className={`${styles.floatingElement} ${styles.element3}`}></div>
      </div>

      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.contentSpace}>
          {/* Greeting */}
          <div className={styles.greeting}>
            <Sparkles className={styles.sparkle} />
            <span className={styles.greetingText}>Hello, I&apos;m</span>
            <Sparkles className={styles.sparkle} />
          </div>

          {/* Name */}
          <h1 className={styles.name}>
            <span className={styles.firstName}>Ahmad</span>{' '}
            <span className={styles.lastName}>
              Hassan
            </span>
          </h1>

          {/* Age and typing animation */}
          <div className={styles.ageSection}>
            <p className={styles.ageText}>
              <span className={styles.ageHighlight}>15 years old</span> passionate
            </p>
            <div className={styles.typingContainer}>
              {text}
              <span className={styles.cursor}>|</span>
            </div>
          </div>

          {/* Description */}
          <p className={styles.description}>
            Building intelligent solutions with modern technologies. Specializing in{' '}
            <span className={styles.techHighlight}>AI development</span> and{' '}
            <span className={styles.webHighlight}>full-stack web applications</span>.
          </p>

          {/* CTA Buttons */}
          <div className={styles.buttonContainer}>
            <button className={styles.primaryButton}>
              <Code className={styles.buttonIcon} />
              View My Work
            </button>
            <button className={styles.secondaryButton}>
              <Download className={styles.buttonIcon} />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className={styles.socialContainer}>
            {[
              { icon: Github, href: 'https://github.com/ahmadhassanch-dev', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmad-hassan-898549387/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ahmadhassanch.dev@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                aria-label={label}
              >
                <Icon className={styles.socialIcon} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollContent}>
            <span className={styles.scrollText}>Scroll to explore</span>
            <ChevronDown className={styles.scrollIcon} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero