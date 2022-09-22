import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Signature from "../components/Signature";
import Fog from "../components/Fog";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SignatureImage from "../components/SignatureImage";


export default function Home() {
  return (
  
    <main className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&amp;display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Fog Component needs to go on top of other elements but Signature, to allow hovering. */}
      
      <div className={styles.center_text}> 
      <Signature />
      <SignatureImage />
      </div>
      <Fog />

     
      <Header />
      
      <Footer />
          </main>
          
  );
}
