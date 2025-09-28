"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Code, Briefcase, MessageSquare } from 'lucide-react'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      const currentSection = sections.find(section => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${styles.navigation} ${isScrolled ? styles.scrolled : styles['navigation-transparent']}`}
    >
      <div className={styles['nav-container']}>
        <div className={styles['nav-content']}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={styles['nav-logo']}
            onClick={() => scrollToSection('hero')}
          >
            <h1>
              Ahmad <span className={styles['logo-highlight']}>Hassan</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles['nav-desktop']}>
            {navItems.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(id)}
                className={`${styles['nav-item']} ${activeSection === id ? styles.active : ''}`}
              >
                <Icon size={16} />
                {label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className={styles['nav-mobile-toggle']}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={styles['nav-mobile-toggle']}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={styles['nav-mobile-menu']}
          >
            <div className={styles['nav-mobile-items']}>
              {navItems.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(id)}
                  className={`${styles['nav-mobile-item']} ${activeSection === id ? styles.active : ''}`}
                >
                  <Icon size={20} />
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navigation