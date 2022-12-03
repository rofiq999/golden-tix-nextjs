import Image from "next/image";
import styles from "../../styles/Signup.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, connect, useSelector } from "react-redux";

import authAction from "../../redux/actions/auth";

import logo from "../../assets/logo.png";
import eye from "../../assets/eye.png";
import facebook from "../../assets/Facebook.png";
import google from "../../assets/google.png";
import logo2 from "../../assets/logo2.png";

export default function Signup() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    dispatch(authAction.registerThunk(data));
    // if (state.auth.isLoading) {
    //   toast(`Loading...`);
    // }
    if (state.auth.isError) {
      toast.error(`Register Failed!`);
    }
    if (state.auth.isFulfilled) {
      toast.success(`Register Success! Please verify your email!`);
    }
    // console.log("test");
  };

  // console.log(`firstname: ${firstName}`);
  // console.log(lastName);
  // console.log(email);
  // console.log(password);
  return (
    <main className={styles["main"]}>
      <aside className={styles["aside-left"]}>
        <Image className={styles["aside-left-image-1"]} src={logo} alt="img" />
        <h1 className={styles["aside-left-header-1"]}>
          Lets build your account
        </h1>
        <p className={styles["aside-left-text-1"]}>
          To be a loyal moviegoer and access all of features, your details are
          required.
        </p>
        <div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-1"]}>1</div>
            <p className={styles["aside-left-text-2"]}>
              Fill your additional details
            </p>
          </div>
          <div className={styles["aside-left-line-1"]}></div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-3"]}>2</div>
            <p className={styles["aside-left-text-3"]}>Activate your account</p>
          </div>
          <div className={styles["aside-left-line-1"]}></div>
          <div className={styles["aside-left-div-2"]}>
            <div className={styles["aside-left-div-3"]}>3</div>
            <p className={styles["aside-left-text-3"]}>Done</p>
          </div>
        </div>
      </aside>
      <aside className={styles["aside-right"]}>
        <Image
          className={styles["aside-right-image-2"]}
          src={logo2}
          alt="img"
        />
        <h1 className={styles["aside-right-header-2"]}>Sign Up</h1>
        <h1 className={styles["aside-right-header-1"]}>
          Fill your additional details
        </h1>
        <p className={styles["aside-right-label-1"]}>Firstname</p>
        <input
          className={styles["aside-right-input-1"]}
          type="text"
          placeholder="Write your firstname"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <p className={styles["aside-right-label-1"]}>Lastname</p>
        <input
          className={styles["aside-right-input-1"]}
          type="text"
          placeholder="Write your lastname"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
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
            onClick={() => {
              hidden === "password" ? setHidden("text") : setHidden("password");
            }}
            className={styles["aside-right-image-1"]}
            src={eye}
            alt="img"
          />
        </div>
        <div className={styles["aside-right-div-2"]}>
          <input className={styles["aside-right-input-3"]} type="checkbox" />
          <p className={styles["aside-right-text-1"]}>
            I agree to terms & conditions
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <button type="Submit" className={styles["aside-right-btn-1"]}>
            <p className={styles["aside-right-text-7"]}>Join for free now</p>
            <p className={styles["aside-right-text-6"]}>Join for free</p>
          </button>
        </form>
        <p className={styles["aside-right-text-4"]}>
          <span className={styles["aside-right-text-2"]}>
            Do you already have an account?{" "}
          </span>
          <Link href="/auth/signin" className={styles["aside-right-text-3"]}>
            {" "}
            Log in
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
