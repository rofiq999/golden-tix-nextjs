import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Details.module.css";
import PageTitle from "../../Components/PageTitle";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/CardTicket";
import Loading from "../../Components/Loading";
// import poster from "../../assets/poster1.png";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import moviesActions from "../../redux/actions/movies";
import cinemaActions from "../../redux/actions/cinema";

function Details() {
  const dispatch = useDispatch();
  const router = useRouter();
  const movies = useSelector((state) => state.movie.details);
  const loading = useSelector((state) => state.movie.isLoading);
  const token = useSelector((state) => state.auth.userData.token);
  const scheduleData = useSelector((state) => state.cinema.scheduleData);
  const link = process.env.NEXT_PUBLIC_CLOUDINARY_LINK;
  const newDate = new Date(movies.release_date);
  const date = newDate.getDate();
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const year = newDate.getFullYear();
  const id = movies.id;

  const [city, setCity] = useState("Bandung");
  const [dates, setDates] = useState("2022-12-04");
  // console.log(date, month, year);
  console.log(scheduleData);

  useEffect(() => {
    dispatch(
      moviesActions.getDetailsThunk(
        `/api/movie/details/${router.query.detailId}`,
        token
      )
    );
    const config = {
      headers: {
        "x-access-token": token,
      },
      params: {
        date: dates,
        movie: movies.movie_name,
        location: city,
      },
    };
    router.push(
      {
        pathname: `/movie/${id}`,
        query: { location: city, date: dates },
      },
      undefined,
      { scroll: false }
    );
    dispatch(cinemaActions.getScheduleThunk(config));
  }, [dispatch]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const config = {
        headers: {
          "x-access-token": token,
        },
        params: {
          date: dates,
          movie: movies.movie_name,
          location: city,
        },
      };
      dispatch(cinemaActions.getScheduleThunk(config));
      router.push(
        {
          pathname: `/movie/${id}`,
          query: { location: city, date: dates },
        },
        undefined,
        { scroll: false }
      );
    }
  };

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
                    {loading ? (
                      <Loading />
                    ) : (
                      <Image
                        src={`${link}/${movies.image}`}
                        alt="poster"
                        layout="fill"
                        objectFit="contain"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-12">
                {movies.length === 0 ? (
                  <Loading />
                ) : (
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
                )}
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
                <input
                  type="date"
                  name=""
                  id=""
                  value={dates}
                  onChange={(event) => {
                    setDates(event.target.value);
                    const config = {
                      headers: {
                        "x-access-token": token,
                      },
                      params: {
                        date: event.target.value,
                        movie: movies.movie_name,
                        location: city,
                      },
                    };
                    router.push(
                      {
                        pathname: `/movie/${id}`,
                        query: { location: city, date: event.target.value },
                      },
                      undefined,
                      { scroll: false }
                    );
                    dispatch(cinemaActions.getScheduleThunk(config));
                  }}
                />
              </div>
              <div className={styles["location-input"]}>
                <i className="fa-solid fa-map-location"></i>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Set a city"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
          <div className={styles["card-bioskop"]}>
            <div className="container">
              <div className={styles["card-container"]}>
                {scheduleData.map((schedule) => {
                  console.log(movies.movie_name);
                  return (
                    <Card
                      movie_name={movies.movie_name}
                      cinemaone21={schedule.CinemaOne21}
                      hiflix={schedule.Hiflix}
                      image={schedule.image}
                      price={schedule.price}
                    />
                  );
                })}
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
