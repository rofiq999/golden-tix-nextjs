import styles from "../styles/Payment.module.css";
import Image from "next/image";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import googlepay from "../assets/googlepay.png";
import visa from "../assets/visa.png";
import gopay from "../assets/gopay.png";
import paypal from "../assets/paypal.png";
import dana from "../assets/dana.png";
import bca from "../assets/bca.png";
import bri from "../assets/bri.png";
import ovo from "../assets/ovo.png";
import warning from "../assets/warning.png";

export default function Payment() {
  return (
    <main>
      <Header />
      <section className={styles["section-2"]}>
        <p className={styles["section-2-text-1"]}>Total Payment</p>
        <p className={styles["section-2-text-2"]}>$30.00</p>
      </section>
      <section className={styles["section-1"]}>
        <aside className={styles["aside-left"]}>
          <div className={styles["payment-div"]}>
            <h1 className={styles["aside-left-header-1"]}>Payment Info</h1>
            <div className={styles["aside-left-div-1"]}>
              <div className={styles["aside-left-div-2"]}>
                <p className={styles["aside-left-text-1"]}>Date & time</p>
                <p className={styles["aside-left-text-2"]}>
                  Tuesday, 07 July 2020 at 02:00pm
                </p>
              </div>
              <div className={styles["aside-left-div-2"]}>
                <p className={styles["aside-left-text-1"]}>Movie title</p>
                <p className={styles["aside-left-text-2"]}>
                  Spider-Man: Homecoming
                </p>
              </div>
              <div className={styles["aside-left-div-2"]}>
                <p className={styles["aside-left-text-1"]}>Cinema name</p>
                <p className={styles["aside-left-text-2"]}>CineOne21 Cinema</p>
              </div>
              <div className={styles["aside-left-div-2"]}>
                <p className={styles["aside-left-text-1"]}>Number of tickets</p>
                <p className={styles["aside-left-text-2"]}>3 pieces</p>
              </div>
              <div className={styles["aside-left-div-2"]}>
                <p className={styles["aside-left-text-1"]}>Total payment</p>
                <p className={styles["aside-left-text-3"]}>$30,00</p>
              </div>
            </div>
          </div>
          <h1 className={styles["aside-left-header-3"]}>
            Choose a Payment Method
          </h1>
          <h1 className={styles["aside-left-header-2"]}>Payment Method</h1>
          <div className={styles["aside-left-div-3"]}>
            <div className={styles["aside-left-div-5"]}>
              <div className={styles["aside-left-div-4"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={googlepay}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-4"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={visa}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-4"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={gopay}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-4"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={paypal}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-4"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={dana}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-8"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={bca}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-8"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={bri}
                  alt="img"
                />
              </div>
              <div className={styles["aside-left-div-4"]}>
                <Image
                  className={styles["aside-left-img-1"]}
                  src={ovo}
                  alt="img"
                />
              </div>
            </div>
            <div className={styles["aside-left-div-6"]}>
              <div className={styles["aside-left-line-1"]}></div>
              <p className={styles["aside-left-text-4"]}>or</p>
              <div className={styles["aside-left-line-1"]}></div>
            </div>
            <p className={styles["aside-left-text-5"]}>
              <span>Pay via cash.</span>
              <span className={styles["aside-left-color-1"]}>
                {" "}
                See how it work
              </span>
            </p>
          </div>
          <div className={styles["aside-left-div-7"]}>
            <button className={styles["aside-left-btn-1"]}>
              Previous step
            </button>
            <button className={styles["aside-left-btn-2"]}>
              Pay your order
            </button>
          </div>
        </aside>
        <aside className={styles["aside-right"]}>
          <h1 className={styles["aside-left-header-1"]}>Personal Info </h1>
          <div className={styles["aside-right-div-1"]}>
            <p className={styles["aside-right-text-1"]}>Full Name</p>
            <input
              className={styles["aside-right-input-1"]}
              type="text"
              placeholder="Input your fullname"
            />
            <p className={styles["aside-right-text-1"]}>Email</p>
            <input
              className={styles["aside-right-input-2"]}
              type="text"
              placeholder="Input your email"
            />
            <p className={styles["aside-right-text-1"]}>Phone Number</p>
            <div className={styles["aside-right-div-2"]}>
              <p className={styles["aside-right-text-2"]}>+62</p>
              <input
                className={styles["aside-right-input-3"]}
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className={styles["aside-right-div-3"]}>
              <Image src={warning} alt="img" />
              Fill your data correctly
            </div>
          </div>
          <button className={styles["aside-right-btn-1"]}>
            Pay your order
          </button>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
