import { Fragment } from "react";
import styles from "../styles/Order.module.css";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTitle from "../Components/PageTitle";

import cineone from "../assets/cineone2.png";

export default function Order() {
  return (
    <Fragment>
      <PageTitle title={"Order"} />
      <main>
        <Header />
        <section className={styles["section-1"]}>
          <aside className={styles["aside-left"]}>
            <h1 className={styles["movie-header-1"]}>Movie Selected</h1>
            <div className={styles["movie-div-1"]}>
              <p className={styles["movie-text-1"]}>Spider-Man: Homecoming</p>
              <button className={styles["movie-btn-1"]}>Change movie</button>
            </div>
            <h1 className={styles["movie-header-1"]}>Movie Selected</h1>
            <div className={styles["seat-div"]}>
              <p className={styles["seat-text-1"]}>Screen</p>
              <div className={styles["seat-div-1"]}></div>
              <div className={styles["seat-div-8"]}>
                <div className={styles["seat-div-9"]}>
                  <p className={styles["seat-text-2"]}>A</p>
                  <p className={styles["seat-text-2"]}>B</p>
                  <p className={styles["seat-text-2"]}>C</p>
                  <p className={styles["seat-text-2"]}>D</p>
                  <p className={styles["seat-text-2"]}>E</p>
                  <p className={styles["seat-text-2"]}>F</p>
                  <p className={styles["seat-text-2"]}>G</p>
                </div>
                <div className={styles["seat-div-7"]}>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                        <div className={styles["seat-div-5"]}></div>
                        <div className={styles["seat-div-2"]}></div>
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                      <div className={styles["seat-div-5"]}></div>
                      <div className={styles["seat-div-2"]}></div>
                    </div>
                  </div>
                  <div className={styles["seat-div-11"]}>
                    <div className={styles["seat-div-10"]}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                    </div>
                    <div className={styles["seat-div-10"]}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className={styles["seat-header-1"]}>Seating key</h1>
                <div className={styles["seat-div-12"]}>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-2"]}></div>
                    <p className={styles["seat-text-3"]}>Available</p>
                  </div>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-14"]}></div>
                    <p className={styles["seat-text-3"]}>Selected</p>
                  </div>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-15"]}></div>
                    <p className={styles["seat-text-3"]}>Love nest</p>
                  </div>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-16"]}></div>
                    <p className={styles["seat-text-3"]}>Sold</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["btn-div-1"]}>
              <button className={styles["btn-1"]}>Change your movie</button>
              <button className={styles["btn-2"]}>Checkout now</button>
            </div>
          </aside>
          <aside className={styles["aside-right"]}>
            <h1 className={styles["movie-header-1"]}>Order Info</h1>
            <div className={styles["order-div"]}>
              <div className={styles["order-div-1"]}>
                <div className={styles["order-div-4"]}>
                  <Image src={cineone} alt="img" />
                </div>
                <h1 className={styles["order-header-1"]}>CineOne21 Cinema</h1>
                <div className={styles["order-div-5"]}>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>Movie selected</p>
                    <p className={styles["order-text-2"]}>
                      Spider-Man: Homecoming
                    </p>
                  </div>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>
                      Tuesday, 07 July 2020
                    </p>
                    <p className={styles["order-text-2"]}>02:00pm</p>
                  </div>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>One ticket price</p>
                    <p className={styles["order-text-2"]}>$10</p>
                  </div>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>Seat choosed</p>
                    <p className={styles["order-text-2"]}>C4, C5, C6</p>
                  </div>
                </div>
              </div>
              <section className={styles["order-section-2"]}>
                <p className={styles["order-text-3"]}>Total Payment</p>
                <p className={styles["order-text-4"]}>$30</p>
              </section>
            </div>
          </aside>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
