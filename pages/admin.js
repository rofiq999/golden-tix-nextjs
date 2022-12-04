import styles from "../styles/Admin.module.css";
import Image from "next/image";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import poster from "../assets/poster1.png";
import location from "../assets/location.png";
import chevron from "../assets/chevron.png";
import ebv from "../assets/ebv.png";
import hiflix from "../assets/hiflix.png";
import cineone from "../assets/cineone.png";
import calendar from "../assets/calendar.png";
import plus from "../assets/plus.png";
import chart from "../assets/chart.png";

export default function Admin() {
  return (
    <main>
      <Header />
      <section className={styles["section-main"]}>
        <section className={styles["section-1"]}>
          <aside className={styles["aside-left"]}>
            <h1 className={styles["desc-header-1"]}>Movie Description</h1>
            <div className={styles["desc-div"]}>
              <div className={styles["desc-div-1"]}>
                <aside className={styles["desc-aside-left"]}>
                  <div className={styles["desc-div-2"]}>
                    <Image
                      className={styles["decs-img-1"]}
                      src={poster}
                      alt="img"
                    />
                  </div>
                  <div className={styles["desc-div-6"]}>
                    <p className={styles["desc-label-1"]}>Director</p>
                    <input
                      className={styles["desc-input-2"]}
                      type="text"
                      placeholder="Input director"
                    />
                  </div>
                </aside>
                <aside className={styles["desc-aside-right"]}>
                  <p className={styles["desc-label-1"]}>Movie Name</p>
                  <input
                    className={styles["desc-input-1"]}
                    type="text"
                    placeholder="Input movie name"
                  />
                  <p className={styles["desc-label-1"]}>Category</p>
                  <input
                    className={styles["desc-input-1"]}
                    type="text"
                    placeholder="Input category"
                  />
                  <div className={styles["desc-div-3"]}>
                    <div className={styles["desc-div-5"]}>
                      <p className={styles["desc-label-1"]}>Release date</p>
                      <input className={styles["desc-input-2"]} type="date" />
                    </div>
                    <div>
                      <p className={styles["desc-label-1"]}>
                        Duration (hour / minute)
                      </p>
                      <div className={styles["desc-div-4"]}>
                        <input
                          className={styles["desc-input-3"]}
                          type="text"
                          placeholder="0"
                        />
                        <input
                          className={styles["desc-input-3"]}
                          type="text"
                          placeholder="0"
                        />
                      </div>
                    </div>
                  </div>
                  <p className={styles["desc-label-1"]}>Casts</p>
                  <input
                    className={styles["desc-input-2"]}
                    type="text"
                    placeholder="Input casts"
                  />
                </aside>
              </div>
              <button className={styles["desc-btn-1"]}>Add description</button>
              <div className={styles["desc-div-7"]}>
                <p className={styles["desc-label-1"]}>Synopsis</p>
                <input
                  className={styles["desc-input-4"]}
                  type="text"
                  placeholder="Input description"
                />
              </div>
            </div>
          </aside>
          <aside className={styles["aside-right"]}>
            <h1 className={styles["desc-header-1"]}>Premiere Location</h1>
            <div className={styles["location-div"]}>
              <div className={styles["location-div-1"]}>
                <Image className={styles[""]} src={location} alt="img" />
                <p className={styles["location-text-1"]}>Purwokerto</p>
                <Image
                  className={styles["location-img-1"]}
                  src={chevron}
                  alt="img"
                />
              </div>
              <div className={styles["location-div-3"]}>
                <div className={styles["location-div-2"]}>
                  <Image
                    className={styles["location-img-2"]}
                    src={ebv}
                    alt="img"
                  />
                  <Image
                    className={styles["location-img-2"]}
                    src={hiflix}
                    alt="img"
                  />
                  <Image
                    className={styles["location-img-2"]}
                    src={cineone}
                    alt="img"
                  />
                </div>
                <div className={styles["location-div-2"]}>
                  <Image
                    className={styles["location-img-2"]}
                    src={ebv}
                    alt="img"
                  />
                  <Image
                    className={styles["location-img-2"]}
                    src={hiflix}
                    alt="img"
                  />
                  <Image
                    className={styles["location-img-2"]}
                    src={cineone}
                    alt="img"
                  />
                </div>
                <div className={styles["location-div-2"]}>
                  <Image
                    className={styles["location-img-2"]}
                    src={ebv}
                    alt="img"
                  />
                  <Image
                    className={styles["location-img-2"]}
                    src={hiflix}
                    alt="img"
                  />
                  <Image
                    className={styles["location-img-2"]}
                    src={cineone}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <h1 className={styles["desc-header-1"]}>Showtimes</h1>
            <div className={styles["showtime-div"]}>
              <div className={styles["showtime-div-1"]}>
                <Image className={styles[""]} src={calendar} alt="img" />
                <p className={styles["showtime-text-1"]}>Set a date</p>
                <Image
                  className={styles["showtime-img-1"]}
                  src={chevron}
                  alt="img"
                />
              </div>
              <button className={styles["showtime-btn-1"]}>
                <Image className={styles[""]} src={plus} alt="img" />
              </button>
            </div>
          </aside>
        </section>
        <section className={styles["section-2"]}>
          <h1 className={styles["desc-header-1"]}>Premiere Location</h1>
          <div className={styles["chart-div"]}>
            <div className={styles["chart-div-1"]}>
              <div className={styles["chart-div-2"]}>Based on Movie</div>
              <div className={styles["chart-div-3"]}>Based on Location</div>
            </div>
            <div className={styles["chart-div-4"]}>
              <div>
                <Image
                  className={styles["chart-img-1"]}
                  src={chart}
                  alt="img"
                />
                <Image
                  className={styles["chart-img-1"]}
                  src={chart}
                  alt="img"
                />
                <Image
                  className={styles["chart-img-1"]}
                  src={chart}
                  alt="img"
                />
              </div>
              <div>
                <Image
                  className={styles["chart-img-1"]}
                  src={chart}
                  alt="img"
                />
                <Image
                  className={styles["chart-img-1"]}
                  src={chart}
                  alt="img"
                />
                <Image
                  className={styles["chart-img-1"]}
                  src={chart}
                  alt="img"
                />
              </div>
              <div className={styles["chart-div-6"]}>
                <div className={styles["chart-div-5"]}>1</div>
                <div className={styles["chart-div-7"]}>2</div>
                <div className={styles["chart-div-7"]}>3</div>
                <div className={styles["chart-div-7"]}>4</div>
              </div>
              <div className={styles["view-div"]}>
                <div className={styles["view-line"]}></div>
                <div className={styles["view-text-1"]}>view more</div>
                <div className={styles["view-line"]}></div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
