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
                <p className={styles.employer_ocupation}>
                  Innovation Consultant
                </p>
              </div>
              <i class="icon ion-md-quote review-icon"></i>
            </div>
            <p>
              Iñigo consistently delivered beyond expectations, actively
              contributing to innovative strategies and the development of SERN.
              Through his willingness to learn, we successfully met several
              deadlines on the expected deliverables of our projects and
              expanded our Network. We can say he was a key element to maintain
              our communication channels and helping us pursue the overall goals
              of SERN.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.container}>
            <div className={styles.title_container}>
              <div className={styles.employer_details}>
                <p className={styles.employer_name}>Idoia Iturbe</p>
                <p className={styles.employer_ocupation}>
                  Managing Director
                </p>
              </div>
              <i class="icon ion-md-quote review-icon"></i>
            </div>
            <p>
              It has been a pleasure working with Iñigo. He has shown a lot of
              creativity, self-management skills, an open attitude to keep
              learning, attention to detail in the reports that he has had to
              develop, knowledge of digital marketing and above all a great
              camaraderie during the months he has been in Demium. Having him
              has been a pleasure and I wish him the best in his future career
              opportunities.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.container}>
            <div className={styles.title_container}>
              <div className={styles.employer_details}>
                <p className={styles.employer_name}>Andreia Mendes</p>
                <p className={styles.employer_ocupation}>
                  Innovation Consultant
                </p>
              </div>
              <i class="icon ion-md-quote review-icon"></i>
            </div>
            <p>
              Iñigo consistently delivered beyond expectations, actively
              contributing to innovative strategies and the development of SERN.
              Through his willingness to learn, we successfully met several
              deadlines on the expected deliverables of our projects and
              expanded our Network. We can say he was a key element to maintain
              our communication channels and helping us pursue the overall goals
              of SERN.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.container}>
            <div className={styles.title_container}>
              <div className={styles.employer_details}>
                <p className={styles.employer_name}>Andreia Mendes</p>
                <p className={styles.employer_ocupation}>
                  Innovation Consultant
                </p>
              </div>
              <i class="icon ion-md-quote review-icon"></i>
            </div>
            <p>
              Iñigo consistently delivered beyond expectations, actively
              contributing to innovative strategies and the development of SERN.
              Through his willingness to learn, we successfully met several
              deadlines on the expected deliverables of our projects and
              expanded our Network. We can say he was a key element to maintain
              our communication channels and helping us pursue the overall goals
              of SERN.
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default References;
