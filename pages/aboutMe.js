import Image from "next/image";
import styles from "../styles/AboutMe.module.css";
import SectionTitle from "../components/SectionTitle";
import Techstack from "../components/Techstack";
import References from "../components/References";
import Link from "next/link";
import { currentAge } from "../helpers";
import Head from 'next/head'




const aboutMe = ({}) => {
  
  return (
    <main className="custom-body">
    <div className="contenedor">
      <SectionTitle
      preheading= "Get to know me"
        heading = "About Me"
      
      />

      <section className={styles.description}>
        <div className={styles.image_container}>
          <Image
            layout="responsive"
            width={300}
            height={300}
            src="/img/aboutMe.jpg"
            alt="about us image"
          />
        </div>
        <div className={styles.text_container}>
          <h2>Who am I?</h2>
          <h1>I am Íñigo Ferreira, a Coding Lover & Web Developer</h1>
          <p>
            I love the principles of responsiveness and the oddly satisfying
            feeling when watching websites shrink into mobile screens to still
            look amazing. I like to see myself like those web pages, moldable
            but still keeping my creative twist.
          </p>
          <div className={styles.data_container}>
            <div className={styles.first_block}>
              <div className={styles.name}>
                <p>
                  <strong>Name: </strong>Inigo Ferreira
                </p>
              </div>
              <div className={styles.age}>
                <p>
                  <strong>Age: </strong> {currentAge()}
                </p>
              </div>
            </div>
            <div className={styles.second_block}>
              <div className={styles.email}>
                <p>
                  <strong>Email: </strong>{" "}
                  <a href="mailto:emma@example.com">iniferre96@gmail.com </a>
                </p>
              </div>
              <div className={styles.location}>
                <p>
                  <strong>From: </strong>Bilbao, Spain
                </p>
              </div>
            </div>
          </div>
          <div className={styles.links_section}>
            <div className={styles.buttons_section}>
              <Link href="#">Download CV</Link>
            </div>
            <ul class="list-unstyled list-inline content-follow">
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/i%C3%B1igo-ferreira/">
                  <i class="icon ion-logo-linkedin"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/gitferreira">
                  {" "}
                  <i class="icon ion-logo-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </section>
      <section className={styles.tech}>
        <p>Some of the Technologies I work with</p>
        <h2>Tech Stack</h2>
      <Techstack />
      </section>
      <section className={styles.references}>
        <p>Some of the nice things previous employers said :) </p>
        <h2>References</h2>
      <References />
      </section>
    </div>
    </main>
  );
};

export default aboutMe;
