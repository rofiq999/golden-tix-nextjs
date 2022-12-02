import React from "react";
import Image from "next/image";
import styles from "../styles/CardMovieShow.module.css";
import sample from "../assets/poster1.png";

function CardMovieShow() {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["card-movie"]}>
          <div className={styles["title"]}>
            <p>Manusya Bala-Bala Balik Rumah</p>
          </div>
          <div className={styles["categories"]}>
            <p>Acion, Adventure, Sci-FI</p>
          </div>
          <div className={styles["detail-btn"]}>
            <button>Details</button>
          </div>
          <div className={styles["book-btn"]}>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className={styles["card"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["card-movie"]}>
          <div className={styles["title"]}>
            <p>Manusya Bala-Bala Balik Rumah</p>
          </div>
          <div className={styles["categories"]}>
            <p>Acion, Adventure, Sci-FI</p>
          </div>
          <div className={styles["detail-btn"]}>
            <button>Details</button>
          </div>
          <div className={styles["book-btn"]}>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className={styles["card"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["card-movie"]}>
          <div className={styles["title"]}>
            <p>Manusya Bala-Bala Balik Rumah</p>
          </div>
          <div className={styles["categories"]}>
            <p>Acion, Adventure, Sci-FI</p>
          </div>
          <div className={styles["detail-btn"]}>
            <button>Details</button>
          </div>
          <div className={styles["book-btn"]}>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className={styles["card"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["card-movie"]}>
          <div className={styles["title"]}>
            <p>Manusya Bala-Bala Balik Rumah</p>
          </div>
          <div className={styles["categories"]}>
            <p>Acion, Adventure, Sci-FI</p>
          </div>
          <div className={styles["detail-btn"]}>
            <button>Details</button>
          </div>
          <div className={styles["book-btn"]}>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div className={styles["card"]}>
        <div className={styles["image-container"]}>
          <Image
            src={sample}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["card-movie"]}>
          <div className={styles["title"]}>
            <p>Manusya Bala-Bala Balik Rumah</p>
          </div>
          <div className={styles["categories"]}>
            <p>Acion, Adventure, Sci-FI</p>
          </div>
          <div className={styles["detail-btn"]}>
            <button>Details</button>
          </div>
          <div className={styles["book-btn"]}>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMovieShow;
