import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Signature from "../components/Signature";
import Fog from "../components/Fog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignatureImage from "../components/SignatureImage";
import { useState, useEffect } from "react";

export default function Home() {
  const [centerText, setCenterText] = useState(false);
  useEffect(() => {
    setCenterText(true);
  }, []);

  return (
    <>
     
        <main className={styles.main}>

          {/* Fog Component needs to go on top of other elements but Signature, to allow hovering. */}

          <div
            className={`${styles.center_text} ${
              centerText ? `${styles.center_text_hover}` : ""
            }`}
          >
            <Signature />
            <SignatureImage />
          </div>
          <Fog />

          <Header />

          <Footer />
        </main>

    </>
  );
}
