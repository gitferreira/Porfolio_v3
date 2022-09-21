import styles from "../styles/Footer.module.css";

import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <h3>IF</h3>
      </div>
      <div className={styles.footer_right}>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/i%C3%B1igo-ferreira/">
              <i className="icon ion-logo-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/gitferreira">
              <i className="icon ion-logo-github"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
