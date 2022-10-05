import Image from "next/image";
import styles from '../styles/AboutMe.module.css'
import SectionTitle from "../components/SectionTitle";

const aboutMe = () => {
  return (
    <main className="contenedor">
      <SectionTitle />

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
          <h3>I am Íñigo Ferreira, a Coding Lover & Web Developer</h3>
          <p>
            I love the principles of responsiveness and the oddly satisfying
            feeling when watching websites shrink into mobile screens to still
            look amazing. I like to see myself like those web pages, moldable
            but still keeping my creative twist.
          </p>
        </div>
      </section>
    </main>
  );
};

export default aboutMe;
