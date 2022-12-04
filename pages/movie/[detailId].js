import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Details.module.css";
import PageTitle from "../../Components/PageTitle";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/CardTicket";
import poster from "../../assets/poster1.png";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import moviesActions from "../../redux/actions/movies";

function Details() {
  const dispatch = useDispatch();
  const router = useRouter();
  const movies = useSelector((state) => state.movie.details);
  const token = useSelector((state) => state.auth.userData.token);
  const link = process.env.NEXT_PUBLIC_CLOUDINARY_LINK;
  const newDate = new Date(movies.release_date);
  const date = newDate.getDate();
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const year = newDate.getFullYear();
  console.log(date, month, year);

  useEffect(() => {
    dispatch(
      moviesActions.getDetailsThunk(
        `/api/movie/details/${router.query.detailId}`,
        token
      )
    );
  }, [dispatch]);

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
                      src={`${link}/${movies.image}`}
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
                    <h1>{movies.movie_name}</h1>
                  </div>
                  <div className={styles["categories"]}>
                    <p>{movies.genres.join(", ")}</p>
                  </div>
                  <div className={styles["credits"]}>
                    <div className={styles["left"]}>
                      <div className={styles["release"]}>
                        <p className={styles["label"]}>Release Date</p>
                        <p className={styles["content"]}>
                          {`${date} ${month} ${year}`}
                        </p>
                      </div>
                      <div className={styles["duration"]}>
                        <p className={styles["label"]}>Duration</p>
                        <p
                          className={styles["content"]}
                        >{`${movies.duration} minutes`}</p>
                      </div>
                    </div>
                    <div className={styles["right"]}>
                      <div className={styles["directed"]}>
                        <p className={styles["label"]}>Directed by</p>
                        <p className={styles["content"]}>{movies.director}</p>
                      </div>
                      <div className={styles["casts"]}>
                        <p className={styles["label"]}>Casts</p>
                        <p className={styles["content"]}>{movies.casts}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["synopsis"]}>
                    <div className={styles["title"]}>
                      <p>Synopsis</p>
                    </div>
                    <p>{movies.synopsis}</p>
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
