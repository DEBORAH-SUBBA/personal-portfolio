import React from "react";
import styles from "./Contact.module.css";
import email from "/assets/contact/emailIcon.png"
import linkdin from "/assets/contact/linkedinIcon.png"
import github from "/assets/contact/githubIcon.png"


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:myemail@email.com">deborah.subba@msu.edu.in</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkdin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/deborah-subba-91331a338/">linkedin.com/Deborah</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/DEBORAH-SUBBA">github.com/DEBORAH-SUBBA</a>
        </li>
      </ul>
      
    </footer>
  );
};
