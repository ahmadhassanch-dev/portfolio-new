"use client"

import { User, MapPin, Calendar, GraduationCap } from 'lucide-react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            About <span className={styles.titleHighlight}>Me</span>
          </h2>
          <p className={styles.subtitle}>
            Passionate about creating innovative solutions at the intersection of AI and web development
          </p>
        </div>

        <div className={styles.grid}>
          {/* Profile Section */}
          <div className={styles.profileSection}>
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <div className={styles.avatar}>
                  AH
                </div>
                <div className={styles.profileInfo}>
                  <h3>Ahmad Hassan</h3>
                  <p>AI & Web Developer</p>
                </div>
              </div>
              <p className={styles.profileText}>
                I'm Ahmad Hassan, a 15-year-old developer with a passion for creating innovative 
                solutions using cutting-edge technologies. Despite my young age, I've already 
                gained substantial experience in both AI development and full-stack web applications.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <div className={styles.infoIcon}>
                    <Calendar size={20} />
                  </div>
                  <h4 className={styles.infoTitle}>Age</h4>
                </div>
                <p className={styles.infoText}>15 Years Old</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <div className={styles.infoIcon}>
                    <MapPin size={20} />
                  </div>
                  <h4 className={styles.infoTitle}>Location</h4>
                </div>
                <p className={styles.infoText}>Pakistan</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <div className={styles.infoIcon}>
                    <GraduationCap size={20} />
                  </div>
                  <h4 className={styles.infoTitle}>Focus</h4>
                </div>
                <p className={styles.infoText}>AI & Web Development</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>2+</div>
                <div className={styles.statLabel}>Years Coding</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects Built</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Passion</div>
              </div>
            </div>

            <div className={styles.profileCard}>
              <h3 style={{ color: 'white', marginBottom: '1rem' }}>My Journey</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p className={styles.profileText}>
                  My journey in programming started early, and I've since focused on mastering 
                  technologies that are shaping the future of software development. I believe in 
                  continuous learning and staying up-to-date with the latest trends in technology.
                </p>
                <p className={styles.profileText}>
                  When I'm not coding, I enjoy exploring new AI models, contributing to open-source 
                  projects, and sharing my knowledge with the developer community. My goal is to 
                  build solutions that make a positive impact on people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About