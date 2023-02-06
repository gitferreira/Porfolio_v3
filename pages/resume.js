import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import Cards from "../components/Cards";
import CardsEducation from "../components/CardsEducation";
import SkillsBar from "../components/SkillsBar";
import VideoModal from "../components/VideoModal";
import styles from "../styles/Resume.module.css";
import Link from "next/link";

const resume = () => {
  const skillsSectionRef = useRef(null);
  const [showSkillsBar, setShowSkillsBar] = useState(false);

  useEffect(() => {
    const loading1 = document.getElementsByClassName("loading1");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("now");
          setShowSkillsBar(true);
        }
      });
    });

    observer.observe(skillsSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.custom_contenedor}>
      <SectionTitle
        preheading="Check out what I've been doing!"
        heading="Resume"
      />
      <div className={styles.cards_container}>
        <h2 className={styles.heading}>Experience</h2>
        <section className={styles.cards_section}>
          <Cards
            image="/img/programming.svg"
            title="FullStack Developer"
            organization="SMART Technologies"
            date="feb. 2021 - Currently | (Remote)"
            description="Active Full Stack Developer at SMART’s Web Development team in
      Calgary, Canada. (Remotely) – Agile SD."
          />
          <Cards
            image="/img/business.svg"
            title="Jr. EU Project Manager"
            organization="SERN"
            date="jan. 2020 - jul. 2020 | (Brussels, Belgium)"
            description="Management of EU funded  projects to support SMEs and Startups on innovative actions within the European framework."
          />
          <Cards
            image="/img/rocket.svg"
            title="Junior Project Manager"
            organization="DEMIUM"
            date="apr. 2019 - oct. 2019 | (Bilbao, Spain)"
            description="Diverse technological and innovative projects management in one of the fastest-growing Startup Incubators in Europe."
          />
          <Cards
            image="/img/finance.svg"
            title="Finance & HR Intern"
            organization="ASK Chemicals"
            date="sept. 2017 - feb. 2018 | (Bilbao, Spain)"
            description="Support to the Finance and Human Resources departments in an International Corporation of the Industrial Sector."
          />
        </section>
        <h2 className={styles.heading}>Education</h2>
        <section className={`${styles.cards_section} ${styles.education}`}>
          <CardsEducation
            image="/img/self-taught.svg"
            title="Other Certifications"
            organization="Self-taught"
            date="2021 - Currently"
            listItem1="React - The Complete Guide."
            listItem2="React - La Guia Completa."
            listItem3="Vue - The Complete Guide."
            listItem4="Desarrollo FullStack MEVN."
            listItem5="The Complete Sass & SCSS Course."
            listItem6="Complete C# Masterclass."
          />
          <CardsEducation
            image="/img/ironhack.svg"
            title="Fullstack Web Development"
            organization="IRONHACK"
            date=" 2020 - 2021"
            description="Intensive 9 week Fullstack Web Development Bootcamp.
          HTML5 | CSS3 | JavaScript | React.js | Redux | Node.js | Express.js | MongoDB | ..."
          />
          <CardsEducation
            image="/img/innovation.svg"
            title="Innovation and Competitiveness"
            organization="Deusto Business School"
            date="2018 - 2019"
            description="International Master´s focused on Innovation Management and New Technologies."
          />
          <CardsEducation
            image="/img/economics.svg"
            title="Business Management & EDP"
            organization="Deusto Business School"
            date="2014 - 2018"
            description="Bachellor in BA, specializing in Consulting and Innovation Management."
          />
        </section>
        <div className={styles.buttons_section}>
          <Link href="#">Download CV</Link>
        </div>
      </div>
      <section className="contenedor">
        <div ref={skillsSectionRef} className={styles.skills_section}>
          <p>My level of knowledge with some technologies</p>
          <h2>Skills</h2>
          {showSkillsBar ? <SkillsBar /> : null}
        </div>
      </section>

      <section className="contenedor">
        <div className={styles.videoresume_section}>
          <div className={styles.left_column}>
            <h2>Video Resume</h2>
            <p>My Video Resume is still in progress 😅</p>
            <p>
              For the moment, please enjoy this compilation of penguin fails!
            </p>
          </div>
          <div className={styles.right_column}>
            <VideoModal />
          </div>
        </div>
      </section>
    </main>
  );
};

export default resume;
