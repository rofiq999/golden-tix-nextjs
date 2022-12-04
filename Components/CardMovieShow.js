import React from "react";
import Image from "next/image";
import styles from "../styles/CardMovieShow.module.css";
import sample from "../assets/poster1.png";
import Router, { useRouter } from "next/router";

function CardMovieShow({ name, categories, image, id }) {
  const router = useRouter();
  const link = process.env.NEXT_PUBLIC_CLOUDINARY_LINK;
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["image-container"]}>
          <Image
            src={`${link}/${image}`}
            alt="poster"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className={styles["card-movie"]}>
          <div className={styles["title"]}>
            <p>{name}</p>
          </div>
          <div className={styles["categories"]}>
            <p>{categories}</p>
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
          <div className={styles["book-btn"]}>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardMovieShow;
