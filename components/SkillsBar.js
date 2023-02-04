import React, {useState, useEffect} from "react";
import styles from "../styles/SkillsBar.module.css";

const SkillsBar = () => {
  const [loadingPercentages, setLoadingPercentages] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const containers = document.querySelectorAll(`.${styles.skills}`);
      containers.forEach(container => {
        const containerPosition = container.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (containerPosition < viewportHeight) {
          const loadingElements = container.querySelectorAll(`.${styles.loading1}, .${styles.loading2}, .${styles.loading3}, .${styles.loading4}, .${styles.loading5}, .${styles.loading6}, .${styles.loading7}, .${styles.loading8}`);
          loadingElements.forEach((loadingElement, index) => {
            const currentPercentage = loadingPercentages[index];
            if (currentPercentage === 0) {

              setTimeout(() => {
                setLoadingPercentages(prevLoadingPercentages => {
                  const newLoadingPercentages = [...prevLoadingPercentages];
                  newLoadingPercentages[index] = 100;
                  console.log('now loading')
            
                  return newLoadingPercentages;
              }, "5000")

              });
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <p>HTML5 / CSS3 </p>
        <div
          className={styles.loading1}
          style={{ 
            width: `${loadingPercentages[0]}%`,
            animation: `load1 ${loadingPercentages[0]}%`
          }}
        />
        <p>JavaScript</p>
        <div
          className={styles.loading2}
          style={{ width: `${loadingPercentages[1]}%` }}
        />
        <p>UX / UY</p>
        <div
          className={styles.loading3}
          style={{ width: `${loadingPercentages[2]}%` }}
        />
        <p>Web Design</p>
        <div
          className={styles.loading4}
          style={{ width: `${loadingPercentages[3]}%` }}
        />
      </div>
      <div className={styles.container}>
        <p>React.js</p>
        <div
          className={styles.loading5}
          style={{ width: `${loadingPercentages[4]}%` }}
        />
        <p>Vue.js</p>
        <div
          className={styles.loading6}
          style={{ width: `${loadingPercentages[5]}%` }}
        />
        <p>Node.js</p>
        <div
          className={styles.loading7}
          style={{ width: `${loadingPercentages[6]}%` }}
        />
        <p>TypeScript (Currently Learning)</p>
        <div
          className={styles.loading8}
          style={{ width: `${loadingPercentages[7]}%` }}
        />
        </div>
        </div>
  )
};

export default SkillsBar;
