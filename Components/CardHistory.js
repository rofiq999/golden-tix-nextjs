import React from "react";
import { useRouter } from "next/router";

//import css
import styles from "../styles/Card_History.module.css";

//import image
import Image from "next/image";
import icon_cineone from "../assets/history/icon_cineone.png";
// import icon_ebu_id from "../../assets/history/icon_ebu_id.png";

export default function CardHistory(props) {
  const router = useRouter();
  const showHandler = () => {
    router.push("/ticket/id");
  };
  return (
    <>
      <div className={styles["content-box"]}>
        <div className={styles["content-spidy"]}>
          <div className={styles["content-sec"]}>
            <p className={styles["time"]}>{`${props.show_date}`}</p>
            <p className={styles["text-spiderman"]}>{props.movie}</p>
          </div>
          <Image src={props.image} alt="icon_cineone" width={100}
            height={30} />
        </div>
        <div className={styles["br-bottom"]}></div>
        <div className={styles["content-tiket"]}>
          {/* kondisi color */}
          {props.type === ["pending", "active"] || props.type === "In active" ? (
            <button className={`${styles["btn-ticket"]} bg-secondary text-white`}>
              {` sdsd ${props.ticket_status}`}
            </button>
          ) : (
            <button className={`${styles["btn-ticket"]} bg-success text-white`}>{` ${props.ticket_status}`}</button>
          )}

          <p className={styles["show"]} onClick={showHandler}>
            Show Details <span className={styles["text-v"]}>∨</span>
          </p>
        </div>
      </div>
    </>
  );
}
