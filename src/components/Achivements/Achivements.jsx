import React from "react";
import styles from "./Achivements.module.css";
import history from "../../data/certificate.json";

const Achievements = () => {
  return (
    <section className={styles.achievementsContainer} id="certificate">
      <h2 className={styles.achievementsTitle}>Achievements</h2>
      <div className={styles.achievementsGrid}>
        {history.map((item, id) => (
          <div key={id} className={styles.achievementCard}>
            {/* Show Image if Available */}
            {item.imageSrc ? (
              <img 
                src={item.imageSrc} 
                alt={item.title || "Certificate"} 
                className={styles.achievementImage}
              />
            ) : (
              <p className={styles.noImageText}>No Image Available</p>
            )}

            <div className={styles.achievementDetails}>
              <h3>{item.title || "No Title Provided"}</h3>

              {/* Button with Spacing */}
              <div className={styles.achievementButton}>
                View Certificate
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
