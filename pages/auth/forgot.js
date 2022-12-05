import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Forgot.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import authAction from "../../redux/actions/auth";

import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import PageTitle from "../../Components/PageTitle";

export default function Signup() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      linkDirect: "http://localhost:3000/auth/reset-password",
    };
    dispatch(authAction.forgotThunk(data, forgotSuccess, forgotFailed));
  };

  const forgotSuccess = () => {
    toast.success(`Forgot password success! please check your email.`);
  };

  const forgotFailed = (error) => {
    toast.error(`${error.response.data.msg}`);
  };

  return (
    <Fragment>
      <PageTitle title={"Forgot Password"} />
      <main className={styles["main"]}>
        <aside className={styles["aside-left"]}>
          <div className={styles["logo-container"]}>
            <div className={styles["golden"]}>
              <p>GOLDEN</p>
            </div>
            <div className={styles["tix"]}>
              <p>TIX</p>
            </div>
          </div>
          <h1 className={styles["aside-left-header-1"]}>
            Lets reset your password
          </h1>
          <p className={styles["aside-left-text-1"]}>
            To be able to use your account again, please complete the following
            steps.
          </p>
          <div>
            <div className={styles["aside-left-div-2"]}>
              <div className={styles["aside-left-div-1"]}>1</div>
              <p className={styles["aside-left-text-2"]}>
                Fill your complete email
              </p>
            </div>
            <div className={styles["aside-left-line-1"]}></div>
            <div className={styles["aside-left-div-2"]}>
              <div className={styles["aside-left-div-3"]}>2</div>
              <p className={styles["aside-left-text-3"]}>Activate your email</p>
            </div>
            <div className={styles["aside-left-line-1"]}></div>
            <div className={styles["aside-left-div-2"]}>
              <div className={styles["aside-left-div-3"]}>3</div>
              <p className={styles["aside-left-text-3"]}>
                Enter your new password
              </p>
            </div>
            <div className={styles["aside-left-line-1"]}></div>
            <div className={styles["aside-left-div-2"]}>
              <div className={styles["aside-left-div-3"]}>4</div>
              <p className={styles["aside-left-text-3"]}>Done</p>
            </div>
          </div>
        </aside>
        <aside className={styles["aside-right"]}>
          <div className={styles["aside-right-image-2"]}>
            <div className={styles["golden"]}>
              <p>GOLDEN</p>
            </div>
            <div className={styles["tix"]}>
              <p>TIX</p>
            </div>
          </div>
          <h1 className={styles["aside-right-header-2"]}>Forgot password</h1>
          <h1 className={styles["aside-right-header-1"]}>
            Fill your complete email
          </h1>
          <p className={styles["aside-right-text-1"]}>
            we'll send a link to your email shortly
          </p>
          <p className={styles["aside-right-label-1"]}>Email</p>
          <input
            className={styles["aside-right-input-1"]}
            type="text"
            placeholder="Write your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <form onSubmit={handleSubmit}>
            <button type="submit" className={styles["aside-right-btn-1"]}>
              <p className={styles["aside-right-text-7"]}>Activate now</p>
            </button>
          </form>
        </aside>
      </main>
    </Fragment>
  );
}
