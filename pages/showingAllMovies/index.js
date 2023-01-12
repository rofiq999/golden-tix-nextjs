import Image from "next/image";
import styles from "../../styles/ShowingAll.module.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageTitle from "../../Components/PageTitle";
import CardShow from "../../Components/CardMovieShow";
import CardUpcoming from "../../Components/CardUpcoming";
import Loading from "../../Components/Loading";
// import logo from "../assets/golden-logo.png";
import poster1 from "../../assets/sri-asih.jpg";
import poster2 from "../../assets/wakanda.jpg";
import poster3 from "../../assets/keramat.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import moviesActions from "../../redux/actions/movies";
import { useRouter } from "next/router";

const useQuery = () => {
  const { search } = useRouter().query;
  console.log(search);
  return useMemo(() => new URLSearchParams(search), [search]);
};

export default function showingAll() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { search, page, limit, month } = router.query;
  const getQuery = useQuery();
  const upcomingMovies = useSelector((state) => state.movie.upcoming);
  const showingMovies = useSelector((state) => state.movie.showing);
  const totalPage = useSelector((state) => state.movie.meta.page);
  const loading = useSelector((state) => state.movie.isLoading);
  const [selected, setSelected] = useState("January");
  // const [query, setQuery] = useState({
  //   page: page || 1,
  //   limit: limit || 10,
  //   search: search || "",
  // });

  useEffect(() => {
    // router.push({
    //   pathname: "/showingAllMovies",
    //   query: { ...query },
    // });
    dispatch(moviesActions.getUpcomingThunk({ page, limit, search, month }));
  }, [dispatch, router.query]);

  console.log(getQuery);
  // useEffect(() => {
  //   dispatch(moviesActions.getUpcomingThunk(query));
  // }, [dispatch, query]);

  return (
    <>
      <PageTitle title={"Showing Movies Page"} />
      <Header />
      <main>
        {/* <div className={styles["top-container"]}>
          <div className="container">
            <div className={`row ${styles["top-content"]}`}>
              <div className="col-lg-6 col-md-6 col-12">
                <div className={styles["tagline-container"]}>
                  <h2>Nearest Cinema, Newest Movie,</h2>
                  <h1>Find out now!</h1>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className={styles["poster-container"]}>
                  <div className={styles["image-content1"]}>
                    <Image
                      src={poster1}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div className={styles["image-content2"]}>
                    <Image
                      src={poster2}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <div className={styles["image-content3"]}>
                    <Image
                      src={poster3}
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles["coming-container"]}>
          <div className="container">
            <div className={styles["tab"]}>
              <div className={styles["upcoming"]}>
                <p>Upcoming Movies</p>
              </div>
            </div>
            <div className={styles["months-slider"]}>
              <div
                className={
                  selected === "January"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("January");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "January",
                      },
                    });
                  }}
                >
                  January
                </button>
              </div>
              <div
                className={
                  selected === "February"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("February");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "February",
                      },
                    });
                  }}
                >
                  February
                </button>
              </div>
              <div
                className={
                  selected === "March"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("March");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "March",
                      },
                    });
                  }}
                >
                  March
                </button>
              </div>
              <div
                className={
                  selected === "April"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("April");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "April",
                      },
                    });
                  }}
                >
                  April
                </button>
              </div>
              <div
                className={
                  selected === "May" ? styles["selected"] : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("May");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "May",
                      },
                    });
                  }}
                >
                  May
                </button>
              </div>
              <div
                className={
                  selected === "June"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("June");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "June",
                      },
                    });
                  }}
                >
                  June
                </button>
              </div>
              <div
                className={
                  selected === "July"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("July");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "July",
                      },
                    });
                  }}
                >
                  July
                </button>
              </div>
              <div
                className={
                  selected === "September"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("September");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "September",
                      },
                    });
                  }}
                >
                  September
                </button>
              </div>
              <div
                className={
                  selected === "October"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("October");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "October",
                      },
                    });
                  }}
                >
                  October
                </button>
              </div>
              <div
                className={
                  selected === "November"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("November");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "November",
                      },
                    });
                  }}
                >
                  November
                </button>
              </div>
              <div
                className={
                  selected === "December"
                    ? styles["selected"]
                    : styles["months-btn"]
                }
              >
                <button
                  onClick={() => {
                    setSelected("December");
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: 1,
                        limit: 10,
                        month: "December",
                      },
                    });
                  }}
                >
                  December
                </button>
              </div>
            </div>
            <div className={styles["card-movies"]}>
              {loading ? (
                <Loading />
              ) : (
                upcomingMovies.map((e) => {
                  return (
                    <CardUpcoming
                      name={e.movie_name}
                      category={e.genres}
                      image={e.image}
                      id={e.id}
                    />
                  );
                })
              )}
            </div>
            <div className={`${styles["paginate-container"]}`}>
              <div className={styles["title-paginate"]}>
                <p>{`showing page ${page} of ${totalPage}`}</p>
              </div>
              <div className={styles["btn-paginate"]}>
                <button
                  onClick={() => {
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: page - 1,
                        limit: 10,
                        search: search,
                      },
                    });
                  }}
                  disabled={page === 1 ? true : false}
                  className={`${styles["btn-prev"]} ${
                    page === 1 && styles["disable-btn"]
                  }`}
                >
                  prev
                </button>
                <button
                  onClick={() => {
                    router.push({
                      pathname: "/showingAllMovies",
                      query: {
                        page: page + 1,
                        limit: 10,
                        search: search,
                      },
                    });
                  }}
                  disabled={page === totalPage ? true : false}
                  className={`${styles["btn-next"]} ${
                    page === totalPage && styles["disable-btn"]
                  }`}
                >
                  next
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["bottom-content"]}>
          <div className={styles["bottom-container"]}>
            <div className={styles["tagline"]}>
              <h2>Be the vanguard of the</h2>
              <h1>Moviegoers</h1>
            </div>
            <div className={styles["join-container"]}>
              <div className={styles["input"]}>
                <input type="text" placeholder="Type your email" />
              </div>
              <div className={styles["join-btn"]}>
                <button>Join Now</button>
              </div>
            </div>
            <div className={styles["info"]}>
              <p>
                By joining you as a Golden Tix member, we will always send you
                the latest updates via email .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
