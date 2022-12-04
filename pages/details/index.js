import React from "react";
import Image from "next/image";
import styles from "../../styles/Details.module.css";
import PageTitle from "../../Components/PageTitle";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/CardTicket";
import poster from "../../assets/poster1.png";

function Details() {
  return (
    <>
      <PageTitle title={"Movie Details"} />
      <Header />
      <main>
        <div className={styles["main-container"]}>
          <div className="container">
            <div className={`row ${styles["main-content"]}`}>
              <div className="col-lg-3 col-md-12 col-12">
                <div className={styles["image-border"]}>
                  <div className={styles["image-container"]}>
                    <Image
                      src={poster}
                      alt="poster"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-12">
                <div className={styles["movie-details"]}>
                  <div className={styles["title"]}>
                    <h1>Manusya Bala-Bala Mudik</h1>
                  </div>
                  <div className={styles["categories"]}>
                    <p>Adventure, Action, Sci-Fi</p>
                  </div>
                  <div className={styles["credits"]}>
                    <div className={styles["left"]}>
                      <div className={styles["release"]}>
                        <p className={styles["label"]}>Release Date</p>
                        <p className={styles["content"]}>June 28, 2017</p>
                      </div>
                      <div className={styles["duration"]}>
                        <p className={styles["label"]}>Duration</p>
                        <p className={styles["content"]}>2 hours 13 minutes </p>
                      </div>
                    </div>
                    <div className={styles["right"]}>
                      <div className={styles["directed"]}>
                        <p className={styles["label"]}>Directed by</p>
                        <p className={styles["content"]}>Jon Watss</p>
                      </div>
                      <div className={styles["casts"]}>
                        <p className={styles["label"]}>Casts</p>
                        <p className={styles["content"]}>
                          Tom Holland, Michael Keaton, Robert Downey Jr.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["synopsis"]}>
                    <div className={styles["title"]}>
                      <p>Synopsis</p>
                    </div>
                    <p>
                      Thrilled by his experience with the Avengers, Peter
                      returns home, where he lives with his Aunt May, under the
                      watchful eye of his new mentor Tony Stark, Peter tries to
                      fall back into his normal daily routine - distracted by
                      thoughts of proving himself to be more than just your
                      friendly neighborhood Spider-Man - but when the Vulture
                      emerges as a new villain, everything that Peter holds most
                      important will be threatened.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["tickets-container"]}>
          <div className={styles["top-content"]}>
            <div className="title">
              <h2>Showtimes and Tickets</h2>
            </div>
            <div className={styles["input-bar"]}>
              <div className={styles["date-input"]}>
                <i className="fa-regular fa-calendar-days"></i>
                <input type="date" name="" id="" />
              </div>
              <div className={styles["location-input"]}>
                <i className="fa-solid fa-map-location"></i>
                <input type="text" name="" id="" placeholder="Set a city" />
              </div>
            </div>
          </div>
          <div className={styles["card-bioskop"]}>
            <div className="container">
              <div className={styles["card-container"]}>
                <Card />
              </div>
              <div className={styles["show-more"]}>
                <span></span>
                <p>Show More</p>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
