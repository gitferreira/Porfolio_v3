import React from 'react'
import Image from "next/image";
import styles from "../styles/Home.module.css";


const SignatureImage = () => {
  return (
    <div className={styles.signature_container}>
    <Image width={270} height={200} src="/img/sign.png" alt='signature logo' />
    </div>
  )
}

export default SignatureImage