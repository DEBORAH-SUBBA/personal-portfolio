import React from "react";
import styles from "./Experience.module.css";
import amazon from "../../../public/assets/history/amazon.jpeg"
import portfolio from "../../../public/assets/history/portfolio.jpeg"
import weather from "../../../public/assets/history/weather.jpeg"

const history =[
  {
    "organisation": "Amazon Replica",
    "imageSrc": amazon,
    "githubLink": "https://github.com/yourusername/amazon-replica",
    "tools": ["React.js", "Node.js", "Express", "MongoDB"]
  },
  {
    "organisation": "Personal Portfolio Website",
    "imageSrc": portfolio,
    "githubLink": "https://github.com/yourusername/portfolio-website",
    "tools": ["HTML", "CSS"]
  },
  {
    "organisation": "Weather App",
    "imageSrc": weather,
    "githubLink": "https://github.com/yourusername/weather-app",
    "tools": ["React.js", "API", "CSS"]
  }
]


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cardGrid}>
        {history.map((item, id) => (
          <div key={id} className={styles.card}>
            <img src={item.imageSrc} alt={item.organisation} />
            <div className={styles.cardDetails}>
              <h3>{item.organisation}</h3>

              {/* Display tools as separate badges */}
              <div className={styles.toolsContainer}>
                {item.tools.map((tool, index) => (
                  <span key={index} className={styles.toolBadge}>
                    {tool}
                  </span>
                ))}
              </div>

              {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className={styles.viewProjectBtn}>View Project</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
