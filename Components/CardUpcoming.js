import React from "react";
import Image from "next/image";
import styles from "../styles/CardUpcoming.module.css";
import sample from "../assets/poster1.png";

function CardUpcoming() {
  return (
    <>
      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>Manusya Bala-Bala Balik Rumah</p>
        </div>
        <div className={styles["categories"]}>
          <p>Acion, Adventure, Sci-FI</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>

      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>Manusya Bala-Bala Balik Rumah</p>
        </div>
        <div className={styles["categories"]}>
          <p>Acion, Adventure, Sci-FI</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>

      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>Manusya Bala-Bala Balik Rumah</p>
        </div>
        <div className={styles["categories"]}>
          <p>Acion, Adventure, Sci-FI</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>

      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>Manusya Bala-Bala Balik Rumah</p>
        </div>
        <div className={styles["categories"]}>
          <p>Acion, Adventure, Sci-FI</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>

      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>Manusya Bala-Bala Balik Rumah</p>
        </div>
        <div className={styles["categories"]}>
          <p>Acion, Adventure, Sci-FI</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>

      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>Manusya Bala-Bala Balik Rumah</p>
        </div>
        <div className={styles["categories"]}>
          <p>Acion, Adventure, Sci-FI</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>
    </>
  );
}

export default CardUpcoming;
