import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cardGrid}>
        {history.map((item, id) => (
          <div key={id} className={styles.card}>
            <img src={getImageUrl(item.imageSrc)} alt={item.organisation} />
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
