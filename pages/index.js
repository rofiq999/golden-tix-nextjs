import Image from "next/image";
import styles from "../styles/LandingPage.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PageTitle from "../Components/PageTitle";
import CardShow from "../Components/CardMovieShow";
import CardUpcoming from "../Components/CardUpcoming";
// import logo from "../assets/golden-logo.png";
import poster1 from "../assets/sri-asih.jpg";
import poster2 from "../assets/wakanda.jpg";
import poster3 from "../assets/keramat.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import moviesActions from "../redux/actions/movies";

export default function Home() {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movie.upcoming);
  console.log(upcomingMovies);

  useEffect(() => {
    dispatch(moviesActions.getUpcomingThunk());
  }, [dispatch]);

  return (
    <>
      <PageTitle title={"Landing Page"} />
      <Header />
      <main>
        <div className={styles["top-container"]}>
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
        </div>
        <div className={styles["showing-container"]}>
          <div className="container">
            <div className={styles["tab"]}>
              <div className={styles["now-showing"]}>
                <p>Now Showing</p>
              </div>
              <div className={styles["view-all"]}>
                <p>view all</p>
              </div>
            </div>
            <div className={styles["card-movies"]}>
              <CardShow />
            </div>
          </div>
        </div>
        <div className={styles["coming-container"]}>
          <div className="container">
            <div className={styles["tab"]}>
              <div className={styles["upcoming"]}>
                <p>Upcoming Movies</p>
              </div>
              <div className={styles["view-all"]}>
                <p>view all</p>
              </div>
            </div>
            <div className={styles["months-slider"]}>
              <div className={styles["months-btn"]}>
                <button>January</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>February</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>March</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>April</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>May</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>June</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>July</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>September</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>October</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>November</button>
              </div>
              <div className={styles["months-btn"]}>
                <button>December</button>
              </div>
            </div>
            <div className={styles["card-movies"]}>
              {upcomingMovies.map((e) => {
                return (
                  <CardUpcoming
                    name={e.movie_name}
                    category={e.genres.join(", ")}
                    image={e.image}
                  />
                );
              })}
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
