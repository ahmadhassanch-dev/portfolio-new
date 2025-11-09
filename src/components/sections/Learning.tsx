"use client"

import { useState } from 'react'
import { 
  Play,
  Youtube, 
  BookOpen,
  Code,
  Brain,
  ExternalLink,
  Clock,
  Star,
  Users
} from 'lucide-react'
import styles from './Learning.module.css'

const Learning = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const learningResources = [
    {
      title: "Complete Python Tutorial for Beginners",
      description: "Learn Python from scratch with practical examples and hands-on projects. Perfect for beginners starting their programming journey.",
      url: "https://www.youtube.com/playlist?list=PLyjQWlylgnG03XQaA4DFuP10uKBXDKpvB",
      category: "Python",
      duration: "15:00:00",
      level: "Beginner",
      views: "229",
      rating: 4.9,
      channel: "Programming with Ahmad Hassan",
      topics: ["Variables", "Functions", "OOP", "File Handling", "APIs"]
    }
  ]

  const categories = ["All", "Python"]
  
  const filteredResources = activeCategory === "All" 
    ? learningResources 
    : learningResources.filter(resource => resource.category === activeCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return styles.beginnerLevel
      case "Intermediate": return styles.intermediateLevel
      case "Advanced": return styles.advancedLevel
      default: return styles.beginnerLevel
    }
  }

  return (
    <section id="learning" className={styles.learning}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>
            Learning <span className={styles.titleHighlight}>Resources</span>
          </h2>
          <p className={styles.subtitle}>
            Curated YouTube tutorials and courses that helped me master Python, OpenAI APIs, and AI agent development
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

        {/* Learning Resources Grid */}
        <div className={styles.resourcesGrid}>
          {filteredResources.map((resource, index) => (
            <div key={resource.title} className={styles.resourceCard}>
              {/* Header with Icon */}
              <div className={styles.resourceHeader}>
                <div className={styles.iconContainer}>
                  <Youtube className={styles.youtubeIcon} />
                </div>
                <div className={`${styles.levelBadge} ${getLevelColor(resource.level)}`}>
                  {resource.level}
                </div>
              </div>

              {/* Content */}
              <div className={styles.resourceContent}>
                <div className={styles.resourceMeta}>
                  <span className={styles.channel}>{resource.channel}</span>
                  <div className={styles.stats}>
                    <div className={styles.views}>
                      <Users className={styles.statIcon} />
                      {resource.views}
                    </div>
                    <div className={styles.rating}>
                      <Star className={styles.statIcon} />
                      {resource.rating}
                    </div>
                  </div>
                </div>

                <h3 className={styles.resourceTitle}>
                  {resource.title}
                </h3>

                <p className={styles.resourceDescription}>
                  {resource.description}
                </p>

                <div className={styles.durationInfo}>
                  <Clock className={styles.clockIcon} />
                  <span>Duration: {resource.duration}</span>
                </div>

                {/* Topics */}
                <div className={styles.topicsList}>
                  {resource.topics.slice(0, 5).map((topic) => (
                    <span key={topic} className={styles.topicTag}>
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.watchButton}
                >
                  <Play className={styles.buttonIcon} />
                  <span>Watch Playlist</span>
                  <ExternalLink className={styles.externalIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <BookOpen className={styles.ctaIcon} />
            <h3 className={styles.ctaTitle}>
              Keep Learning & Growing
            </h3>
            <p className={styles.ctaDescription}>
              These resources have been instrumental in my AI development journey. 
              Continuous learning is key to staying updated with the rapidly evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning