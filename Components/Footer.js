import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import sponsor1 from "../assets/sponsor-1.png";
import sponsor2 from "../assets/sponsor-2.png";
import sponsor3 from "../assets/sponsor-3.png";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className={styles["left-footer"]}>
              <div className={styles["logo-container"]}>
                <div className={styles["golden"]}>
                  <p>GOLDEN</p>
                </div>
                <div className={styles["tix"]}>
                  <p>TIX</p>
                </div>
              </div>
              <div className={styles["tagline"]}>
                <p>
                  Stop waiting in line. Buy tickets conveniently, watch movies
                  quietly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-2 col-12">
            <div className={styles["explore"]}>
              <p>Explore</p>
              <ol>
                <li>Cinemas</li>
                <li>Movie List</li>
                <li>May Ticket</li>
                <li>Notification</li>
              </ol>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-12">
            <div className={styles["sponsor"]}>
              <p>Our Sponsor</p>
              <div className={styles["sponsor-logo"]}>
                <div
                  className={`${styles["sponsor-1"]} ${styles["logo-container"]}`}
                >
                  <Image
                    src={sponsor1}
                    alt="sponsor-1"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </div>
                <div
                  className={`${styles["sponsor-2"]} ${styles["logo-container"]}`}
                >
                  <Image
                    src={sponsor2}
                    alt="sponsor-2"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </div>
                <div
                  className={`${styles["sponsor-3"]} ${styles["logo-container"]}`}
                >
                  <Image
                    src={sponsor3}
                    alt="sponsor-3"
                    layout="fill"
                    objectFit="contain"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 offset-md-1 col-12">
            <div className={styles["social"]}>
              <p>Follow us</p>
              <div className={styles["social-container"]}>
                <div className={styles["social-list"]}>
                  <i className="fa-brands fa-square-facebook"></i>
                  <span className={styles["none"]}>Golden-Tix</span>
                </div>
                <div className={styles["social-list"]}>
                  <i className="fa-brands fa-square-instagram"></i>
                  <span className={styles["none"]}>golden-tix.id</span>
                </div>
                <div className={styles["social-list"]}>
                  <i className="fa-brands fa-square-twitter"></i>
                  <span className={styles["none"]}>golden-tix.id</span>
                </div>
                <div className={styles["social-list"]}>
                  <i className="fa-brands fa-square-youtube"></i>
                  <span className={styles["none"]}>Golden-Tix Cinema</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={styles["copyright-footer"]}>
              <p>&copy;2020 Golden-Tix. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
