import Image from "next/image";
import styles from "../styles/AboutMe.module.css";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";

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
          <h1>I'm Íñigo Ferreira, a Coding Lover & Web Developer</h1>
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
                  <strong>Age: </strong>26
                </p>
              </div>
            </div>
            <div className={styles.second_block}>
              <div className={styles.email}>
                <p>
                  <strong>Email: </strong> <a href="mailto:emma@example.com">iniferre96@gmail.com </a>
                </p>
              </div>
              <div className={styles.location}>
                <p>
                  <strong>From: </strong>Bilbao, Spain
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttons_section}>
          <Link href="#">Download CV</Link>

          </div>
        </div>
      </section>
    </main>
  );
};

export default aboutMe;
