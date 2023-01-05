import React from "react";
import SectionTitle from "../components/SectionTitle";
import Cards from "../components/Cards";
import CardsEducation from "../components/CardsEducation";
import styles from "../styles/Resume.module.css";

const resume = ({}) => {
 
  return (
    <main className={styles.custom_contenedor}>
      <SectionTitle
        preheading="Check out what I've been doing!"
        heading="Resume"
      />
      <section className={styles.cards_section}>
        <Cards
          image="/img/programming.svg"
          title="FullStack Developer"
          organization="SMART Technologies"
          date="feb. 2021 - Currently | (Remote)"
          description="Active Full Stack Developer at SMART’s Web Development team in
      Calgary, Canada. (Remotely) – Agile Software Development."
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
  
      <section className={`${styles.cards_section } ${styles.education}`} >
        <CardsEducation
          image="/img/self-taught.svg"
          title="Other Certifications"
          organization="Self-taught"
          date="2021 - Currently"
          description={["The Complete Web Developer Course 2.0",
          "The Complete Web Developer Course 2.0"]}
          
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
    </main>
  );
};

export default resume;
