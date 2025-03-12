import React from 'react';
import styles from './Footer.module.css'; // Import your CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Deborah Subba. Built with ❤️ using React.
      </p>
    </footer>
  );
};

export default Footer;
