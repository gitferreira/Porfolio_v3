import Image from "next/image";
import Typewriter from "typewriter-effect";
import styles from "../styles/Home.module.css";

const Signature = () => {
  return (
    
    <div className={styles.main_text}>

        <h1>ÍÑIGO FERREIRA</h1>
        <div className={styles.typewrite_text}>
        <h2>I am a</h2>
        <Typewriter
          options={{
            strings: ["FullStack", "Frontend", "Backend"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typing-animation",
            cursor: "|",
            cursorClassName: "cursor-typing-animation",
            delay: 60,
            deleteSpeed:60
          }}
        />
        <h2>Developer</h2>
      </div>
      <div className={styles.signature_container}>
      <Image width={200} height={180} src="/img/signature.jpg" alt='signature logo' />
      </div>
    </div>
  );
};

export default Signature;
