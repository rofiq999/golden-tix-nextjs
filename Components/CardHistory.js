import React from "react";

//import css
import styles from "../styles/Card_History.module.css";

//import image
import Image from "next/image";
import icon_cineone from "../assets/history/icon_cineone.png";
// import icon_ebu_id from "../../assets/history/icon_ebu_id.png";

export default function CardHistory() {
  return (
    <>
      <div className={styles["content-box"]}>
        <div className={styles["content-spidy"]}>
          <div className={styles["content-sec"]}>
            <p className={styles["time"]}>Tuesday, 07 July 2020 - 04:30pm</p>
            <p className={styles["text-spiderman"]}>Spider-Man: Homecoming</p>
          </div>
          <Image src={icon_cineone} alt="icon_cineone" />
        </div>
        <div className={styles["br-bottom"]}></div>
        <div className={styles["content-tiket"]}>
          <button className={styles["btn-ticket"]}>Ticket in active</button>
          <button className={styles["btn-ticket-use"]}>Ticket in active</button>
          <p className={styles["show"]}>
            Show Details <span className={styles["text-v"]}>∨</span>
          </p>
        </div>
      </div>
    </>
  );
}
