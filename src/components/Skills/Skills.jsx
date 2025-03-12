import React from "react";
import styles from "./skills.module.css";
import htmlIcon from "../../../public/assets/skills/html.png"
import cssIcon from "../../../public/assets/skills/css.png"
import reactIcon from "../../../public/assets/skills/react.png"
import mySqlIcon from "../../../public/assets/skills/mySql.png"
import nodeIcon from "../../../public/assets/skills/node.png"
import MongoDB from "../../../public/assets/skills/mongodb.png"


const skill = 
[
  { "title": "HTML", "imageSrc": htmlIcon },
  { "title": "CSS", "imageSrc": cssIcon },
  { "title": "React", "imageSrc": reactIcon},
  { "title": "Node", "imageSrc": nodeIcon },
  { "title": "MySQL", "imageSrc": mySqlIcon },
  { "title": "MongoDB", "imageSrc": MongoDB}

]


export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsList}>
        {skill.map((item, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={item.imageSrc} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
