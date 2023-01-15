import React from "react";
import capsule from "../assests/images/capsule.png";
import tablets from "../assests/images/tablets.jpg";
import syrups from "../assests/images/syrups.jpg";
import lotion from "../assests/images/lotion.png";
import others from "../assests/images/others.png";
import cream from "../assests/images/cream1.png";
import styles from "./Card.module.css";
const Cards = () => {
  return (
    <>
      <div className={styles.card}>
        <img
          src={capsule}
          alt="capsule"
        
        />

        <div className={styles.container}>
          <h4>
            <b>Capsules</b>
          </h4>
        </div>
      </div>

      <div className={styles.card}>
        <img src={tablets} alt="tablets" />

        <div className={styles.container}>
          <h4>
            <b>Tablets</b>
          </h4>
        </div>
      </div>
      <div className={styles.card}>
        <img src={syrups} alt="syrupe" />

        <div className={styles.container}>
          <h4>
            <b>Syrups</b>
          </h4>
        </div>
      </div>
      <div className={styles.card}>
        <img src={lotion} alt="lotion" />

        <div className={styles.container}>
          <h4>
            <b>Lotions</b>
          </h4>
        </div>
      </div>
      <div className={styles.card}>
        <img src={cream} alt="cream" />

        <div className={styles.container}>
          <h4>
            <b>Creams</b>
          </h4>
        </div>
      </div>
      <div className={styles.card}>
        <img src={others} alt="others" />

        <div className={styles.container}>
          <h4>
            <b>Others</b>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cards;
