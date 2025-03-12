import styles from "./App.module.css";
import { About } from "./components/About/About";
import Achivements from "./components/Achivements/Achivements";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills"; 


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.pageContainer}>
        <Hero />
        <About />
         <Skills />
        <Achivements />
        <Experience />
        <Contact /> 
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
