import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import logo from "../assets/golden-logo.png";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showHamburger = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="container">
        <div className={`row ${styles["container"]}`}>
          <div className="col-lg-2 col-md-2 col-10">
            <div className={styles["logo-container"]}>
              <div className={styles["golden"]}>
                <p>GOLDEN</p>
              </div>
              <div className={styles["tix"]}>
                <p>TIX</p>
              </div>
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-2">
            <div className={styles["navbar"]}>
              <div className={styles["left-content"]}>
                <ol>
                  <li>Movies</li>
                  <li>Cinemas</li>
                  <li>Buy Ticket</li>
                </ol>
              </div>
              <div className={styles["right-content"]}>
                <div className={styles["location"]}>
                  <p>Location</p>
                  <i className="fa-sharp fa-solid fa-chevron-down"></i>
                </div>
                <div className={styles["search"]}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={styles["btn-container"]}>
                  <button>Sign Up</button>
                </div>
              </div>
            </div>
            <div
              className={`${styles["menu-toggle"]} ${styles["right-none"]}`}
              onClick={showHamburger}
            >
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["overlay"]} ${!toggle && styles["show"]}`}>
        <div className={styles["toggle-list"]}>
          <div className="container">
            <div className={styles["search"]}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className={styles["location"]}>
            <p>Location</p>
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
          <div className={styles["toggle-content"]}>
            <p>Movies</p>
          </div>
          <div className={styles["toggle-content"]}>
            <p>Cinemas</p>
          </div>
          <div className={styles["toggle-content"]}>
            <p>Buy Ticket</p>
          </div>
          <div className={styles["copyright"]}>
            <p>&copy;2020 Golden-Tix. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
