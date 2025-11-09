"use client"

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react'
import styles from './Contact.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Get In <span className={styles.titleHighlight}>Touch</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to collaborate on your next project? Let's build something amazing together!
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.infoHeader}>
              <h3 className={styles.infoTitle}>Let's Connect</h3>
              <p className={styles.infoDescription}>
                I'm always interested in new opportunities, interesting projects, 
                and collaborations. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.emailIcon}`}>
                  <Mail size={24} />
                </div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>ahmad.hassan@example.com</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.phoneIcon}`}>
                  <Phone size={24} />
                </div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Phone</p>
                  <p className={styles.contactValue}>+92 XXX XXXXXXX</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={`${styles.contactIcon} ${styles.locationIcon}`}>
                  <MapPin size={24} />
                </div>
                <div className={styles.contactText}>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                <a href="https://github.com/ahmadhassanch-dev" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.github}`} aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ahmad-hassan-898549387/" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.linkedin}`} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={`${styles.formRow} ${styles.twoColumns}`}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.formInput}
                  placeholder="What's this about?"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                <Send className={styles.buttonIcon} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>
            Ready to start a project?
          </h3>
          <p className={styles.ctaDescription}>
            Let's discuss your ideas and bring them to life with cutting-edge technology.
          </p>
          <button className={styles.ctaButton}>
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact