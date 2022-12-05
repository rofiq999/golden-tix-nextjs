// import React from "react";
// import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

//import css
import styles from "../../styles/History.module.css";

//import components
import Sidebar from "../../Components/SideBar";
import Card_History from "../../Components/CardHistory";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

//import image
import Image from "next/image";
import icon_cineone from "../../assets/history/icon_cineone.png";
import icon_ebu_id from "../../assets/history/icon_ebu_id.png";
import profileActions from "../../redux/actions/profile";


function index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const profiles = useSelector((state) => state.user.profile);


  const profileHandler = () => {
    router.push("/profile");
  };

  return (
    <>
      <Header />
      <main>
        <section className={`${styles['content-all']} container-fluid`}>
          <div className={`${styles['content']} container`}>
            <div className='row'>
              <div className={`${styles['content-left']} col-lg-3 col-md-12 col-sm-12`}>
                <Sidebar firstname={profiles.firstname} lastname={profiles.lastname} username={profiles.username} image={profiles.image} />
              </div>
              <div
                className={`${styles["content-right"]} col-lg-9 col-md-12 col-sm-12 `}
              >
                <div className={styles["content-right-one"]}>
                  <p className={styles["text-acount"]} onClick={profileHandler}>
                    Account Settings
                  </p>
                  <p className={styles["text-order"]}>Order History</p>
                </div>
                <Card_History />
                <Card_History />
                <Card_History />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default index;
