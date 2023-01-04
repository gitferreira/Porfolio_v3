import styles from '../styles/SectionTitle.module.css'


const SectionTitle = ({ preheading, heading }) => {

  
    
  return (
    <main className={styles.container}>
      <p className={styles.pre_heading}>{preheading}</p>
      <h1 className={styles.heading}>{heading}</h1>
      <div class={styles.animated_bar}></div>
    </main>
  );
};

export default SectionTitle;
