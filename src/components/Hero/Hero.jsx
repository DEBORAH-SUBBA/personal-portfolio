import React from "react";
import styles from "./Hero.module.css";
import heroImage from "/assets/hero/heroImage.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Deborah</h1>
        <p className={styles.description}>
          BCA student at Medhavi Skills University, passionate about cloud computing 
          and MERN stack development.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:debora.subba@msu.edu.in" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="/Deborah_Subba_CV.pdf"  // Path to your CV file
            download="Deborah_Subba_CV-.pdf"  
            className={styles.cvBtn}
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
