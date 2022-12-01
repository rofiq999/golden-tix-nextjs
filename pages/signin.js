import Image from "next/image";
import styles from "../styles/Signin.module.css";
import Link from "next/link";

import logo3 from "../assets/logo3.png";
import eye from "../assets/eye.png";
import facebook from "../assets/Facebook.png";
import google from "../assets/google.png";
import logo2 from "../assets/logo2.png";

export default function Signin() {
  return (
    <main className={styles["main"]}>
      <aside className={styles["aside-left"]}>
        <Image className={styles["aside-left-image-1"]} src={logo3} alt="img" />
        <h1 className={styles["aside-left-header-1"]}>wait, watch, wow!</h1>
      </aside>
      <aside className={styles["aside-right"]}>
        <Image
          className={styles["aside-right-image-2"]}
          src={logo2}
          alt="img"
        />
        <h1 className={styles["aside-right-header-1"]}>Sign In</h1>
        <p className={styles["aside-right-text-9"]}>
          Sign in with your data that you entered during your registration
        </p>
        <p className={styles["aside-right-label-1"]}>Email</p>
        <input
          className={styles["aside-right-input-1"]}
          type="text"
          placeholder="Write your email"
        />
        <p className={styles["aside-right-label-1"]}>Password</p>
        <div className={styles["aside-right-div-1"]}>
          <input
            className={styles["aside-right-input-2"]}
            type="text"
            placeholder="Write your password"
          />
          <Image
            className={styles["aside-right-image-1"]}
            src={eye}
            alt="img"
          />
        </div>
        <button className={styles["aside-right-btn-1"]}>Sign In</button>
        <p className={styles["aside-right-text-4"]}>
          <span className={styles["aside-right-text-2"]}>
            Forgot your password?{" "}
          </span>
          <Link href="/forgot" className={styles["aside-right-text-3"]}>
            Reset now
          </Link>
        </p>
        <div className={styles["aside-right-div-3"]}>
          <div className={styles["aside-right-line-1"]}></div>
          <p className={styles["aside-right-text-5"]}>Or</p>
          <div className={styles["aside-right-line-1"]}></div>
        </div>
        <div className={styles["aside-right-div-4"]}>
          <button className={styles["aside-right-btn-2"]}>
            <Image src={google} alt="img" />
            <p className={styles["aside-right-text-8"]}>Google</p>
          </button>
          <button className={styles["aside-right-btn-2"]}>
            <Image src={facebook} alt="img" />
            <p className={styles["aside-right-text-8"]}>Facebook</p>
          </button>
        </div>
      </aside>
    </main>
  );
}
