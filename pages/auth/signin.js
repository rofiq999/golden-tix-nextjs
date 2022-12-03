import Image from "next/image";
import styles from "../../styles/Signin.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import authAction from "../../redux/actions/auth";

import logo3 from "../../assets/logo3.png";
import eye from "../../assets/eye.png";
import facebook from "../../assets/Facebook.png";
import google from "../../assets/google.png";
import logo2 from "../../assets/logo2.png";

function SignIn() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email: email, password: password };
    dispatch(authAction.loginThunk(data, signinSuccess, signinFailed));
    // console.log("test");
  };

  const signinSuccess = () => {
    toast.success(`Login Success!`);
  };

  const signinFailed = (error) => {
    toast.error(`${error.response.data.msg}`);
  };

  // console.log(state.auth.isFulfilled);
  // console.log(`Firstname: ${email}`);
  // console.log(`Lastname: ${password}`);
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className={styles["aside-right-label-1"]}>Password</p>
        <div className={styles["aside-right-div-1"]}>
          <input
            className={styles["aside-right-input-2"]}
            type={hidden}
            placeholder="Write your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Image
            className={styles["aside-right-image-1"]}
            onClick={() => {
              hidden === "password" ? setHidden("text") : setHidden("password");
            }}
            src={eye}
            alt="img"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <button type="submit" className={styles["aside-right-btn-1"]}>
            Sign In
          </button>
        </form>
        <p className={styles["aside-right-text-4"]}>
          <span className={styles["aside-right-text-2"]}>
            Forgot your password?{" "}
          </span>
          <Link href="/auth/forgot" className={styles["aside-right-text-3"]}>
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

export default SignIn;
