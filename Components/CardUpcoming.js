import React from "react";
import Image from "next/image";
import styles from "../styles/CardUpcoming.module.css";
import sample from "../assets/poster1.png";

function CardUpcoming({ name, category, image }) {
  const link = process.env.NEXT_PUBLIC_CLOUDINARY_LINK;

  return (
    <>
      <div className={styles["card-movie"]}>
        <div className={styles["image-container"]}>
          <Image
            src={`${link}/${image}`}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["title"]}>
          <p>{name}</p>
        </div>
        <div className={styles["categories"]}>
          <p>{category}</p>
        </div>
        <div className={styles["detail-btn"]}>
          <button>Details</button>
        </div>
      </div>
    </>
  );
}

export default CardUpcoming;
