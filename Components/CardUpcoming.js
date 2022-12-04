import React from "react";
import Image from "next/image";
import styles from "../styles/CardUpcoming.module.css";
import sample from "../assets/poster1.png";
import { useRouter } from "next/router";

function CardUpcoming({ name, category, image, id }) {
  const router = useRouter();
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
          <button
            onClick={() => {
              router.push(`/movie/${id}`);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default CardUpcoming;
