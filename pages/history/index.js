
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

//import css
import styles from "../../styles/History.module.css";

//import components
import Sidebar from "../../Components/SideBar";
import Card_History from "../../Components/CardHistory";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Loading from "../../Components/Loading";


function index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const profiles = useSelector((state) => state.user.profile);
  const token = useSelector((state) => state.auth.userData.token);
  const [data, setData] = useState([]);
  const LINK = process.env.NEXT_PUBLIC_BACKEND_URL;
  const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_LINK;

  useEffect(() => {
    const baseUrl = `${LINK}/api/booking/history`;
    axios
      .get(baseUrl,
        {
          headers: {
            "x-access-token": token
          }
        })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  <p className={styles["text-acount"]} onClick={profileHandler} >
                    Account Settings
                  </p>
                  <p className={styles["text-order"]}>Order History</p>
                </div>
                {data.length > 0 && data ? (
                  data.map((e) => (
                    <Card_History className={`${styles['card-history']}`}
                      showHandler={() => { router.push(`/ticket/${e.payment_id}`) }}
                      key={e.id}
                      movie={e.movie}
                      image={`${CLOUD}/${e.image}`}
                      cinema={e.cinema}
                      ticket_status={e.ticket_status}
                      payment_id={e.payment_id}
                      show_date={new Date(e.show_date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    />
                  ))
                ) : (
                  <Loading />
                )}
                {/* <Card_History /> */}
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
