import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styles from "../styles/References.module.css";


const References = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.container}>
            <div className={styles.title_container}> 
          <div className={styles.employer_details}>
            <p className={styles.employer_name}>Andreia Mendes</p>
            <p className={styles.employer_ocupation}>Innovation Consultant</p>
          </div>
          <i class="icon ion-md-quote review-icon"></i>
          </div>
          <p>
            Iñigo consistently delivered beyond expectations, actively
            contributing to innovative strategies and the development of SERN.
            Through his willingness to learn, we successfully met several
            deadlines on the expected deliverables of our projects and expanded
            our Network. We can say he was a key element to maintain our
            communication channels and helping us pursue the overall goals of
            SERN.
          </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>          <div className={styles.container}>
            <div className={styles.title_container}> 
          <div className={styles.employer_details}>
            <p className={styles.employer_name}>Andreia Mendes</p>
            <p className={styles.employer_ocupation}>Innovation Consultant</p>
          </div>
          <i class="icon ion-md-quote review-icon"></i>
          </div>
          <p>
            Iñigo consistently delivered beyond expectations, actively
            contributing to innovative strategies and the development of SERN.
            Through his willingness to learn, we successfully met several
            deadlines on the expected deliverables of our projects and expanded
            our Network. We can say he was a key element to maintain our
            communication channels and helping us pursue the overall goals of
            SERN.
          </p>
          </div></SwiperSlide>
        <SwiperSlide>          <div className={styles.container}>
            <div className={styles.title_container}> 
          <div className={styles.employer_details}>
            <p className={styles.employer_name}>Andreia Mendes</p>
            <p className={styles.employer_ocupation} >Innovation Consultant</p>
          </div>
          <i class="icon ion-md-quote review-icon"></i>
          </div>
          <p>
            Iñigo consistently delivered beyond expectations, actively
            contributing to innovative strategies and the development of SERN.
            Through his willingness to learn, we successfully met several
            deadlines on the expected deliverables of our projects and expanded
            our Network. We can say he was a key element to maintain our
            communication channels and helping us pursue the overall goals of
            SERN.
          </p>
          </div></SwiperSlide>
        <SwiperSlide>          <div className={styles.container}>
            <div className={styles.title_container}> 
          <div className={styles.employer_details}>
            <p className={styles.employer_name}>Andreia Mendes</p>
            <p className={styles.employer_ocupation}>Innovation Consultant</p>
          </div>
          <i class="icon ion-md-quote review-icon"></i>
          </div>
          <p>
            Iñigo consistently delivered beyond expectations, actively
            contributing to innovative strategies and the development of SERN.
            Through his willingness to learn, we successfully met several
            deadlines on the expected deliverables of our projects and expanded
            our Network. We can say he was a key element to maintain our
            communication channels and helping us pursue the overall goals of
            SERN.
          </p>
          </div></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default References;
