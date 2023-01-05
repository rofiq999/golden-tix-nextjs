import React, { useState, useEffect, Fragment } from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import PageTitle from "../../Components/PageTitle";

import cineone from "../../assets/cineone2.png";
import arrowdown from "../../assets/arrowdown.png";
import arrowright from "../../assets/arrowright.png";
import chevron2 from "../../assets/chevron2.png";

import bookingAction from "../../redux/actions/booking";
import cinemaActions from "../../redux/actions/cinema";

function Order() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [id, setId] = useState([]);
  const [code, setCode] = useState([]);
  const seats = useSelector((state) => state.booking.seatData.data);
  const token = useSelector((state) => state.auth.userData.token);
  const showData = useSelector((state) => state.cinema.showingData?.data);
  const bookedDataRaw = useSelector((state) => state.booking.bookedData.data);
  const bookedData = bookedDataRaw?.map((item) => {
    return item.seat_id;
  });
  console.log(showData);

  useEffect(() => {
    console.log(router.query);
    const config = {
      headers: {
        "x-access-token": token,
      },
    };
    // const showTimeId = router.query.showtime_id;
    const showTimeId = localStorage.getItem("id");
    dispatch(bookingAction.getSeatThunk());
    dispatch(bookingAction.getBookedThunk(showTimeId));
    dispatch(cinemaActions.getCinemaShowingThunk(showTimeId, config));
  }, [router.query, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      seatIds: id,
      paymentMethodId: "370a39e9-b3fb-434b-ac85-5c2f3c068f9f",
      movieScheduleId: router.query.showtime_id,
      totalPayment: showData.price * id.length,
    };
    console.log(body);
    const config = {
      headers: {
        "x-access-token": token,
      },
    };
    // dispatch(
    //   bookingAction.postBookThunk(body, config, bookSuccess, bookFailed)
    // );
    axios
      .post(
        "https://golden-tix-backend.vercel.app/api/booking/new",
        body,
        config
      )
      .then((res) => {
        console.log(res);
        bookSuccess(res);
      })
      .catch((err) => {
        console.log(err);
        bookFailed(err);
      });
  };

  const bookSuccess = (res) => {
    toast.success(`Book Success!`);
    router.push(`/ticket/${res.data.data.booking_details.payment_id}`);
    window.open(res.data.data.redirectUrl, "_blank").focus();
  };

  const bookFailed = (error) => {
    toast.error(`${error.message}`);
  };

  // console.log(code);

  return (
    <Fragment>
      <PageTitle title={"Order"} />
      <main>
        <Header />
        <section className={styles["section-1"]}>
          <aside className={styles["aside-left"]}>
            <div className={styles["movie-div"]}>
              <h1 className={styles["movie-header-1"]}>Movie Selected</h1>
              <div className={styles["movie-div-1"]}>
                <p className={styles["movie-text-1"]}>{showData?.movie}</p>
                <Link href="/">
                  <button className={styles["movie-btn-1"]}>
                    Change movie
                  </button>
                </Link>
              </div>
            </div>
            <h1 className={styles["movie-header-1"]}>Choose Your Seat</h1>
            <div className={styles["seat-div"]}>
              <p className={styles["seat-text-1"]}>Screen</p>
              <div className={styles["seat-div-1"]}></div>
              <div className={styles["seat-div-8"]}>
                <div className={styles["seat-div-17"]}></div>
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
                  {/* Row 1 */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index < 7 &&
                            (bookedData.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      {seats?.map(
                        (e, index) =>
                          index >= 7 &&
                          index < 14 &&
                          (bookedData?.includes(e.seat_id) ? (
                            <div
                              style={{ backgroundColor: "" }}
                              className={styles["seat-div-5"]}
                            ></div>
                          ) : (
                            <div
                              style={{ backgroundColor: "" }}
                              className={
                                id.includes(e.seat_id)
                                  ? styles["seat-div-14"]
                                  : styles["seat-div-2"]
                              }
                              onClick={() => {
                                // console.log(e.seat_id);
                                id.includes(e.seat_id)
                                  ? setId(id.filter((x) => x !== e.seat_id))
                                  : setId([...id, e.seat_id]);
                                code.includes(e.seat_code)
                                  ? setCode(
                                      code.filter((x) => x !== e.seat_code)
                                    )
                                  : setCode([...code, e.seat_code]);
                              }}
                            ></div>
                          ))
                      )}
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 14 &&
                            index < 21 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      {seats?.map(
                        (e, index) =>
                          index >= 21 &&
                          index < 28 &&
                          (bookedData?.includes(e.seat_id) ? (
                            <div
                              style={{ backgroundColor: "" }}
                              className={styles["seat-div-5"]}
                            ></div>
                          ) : (
                            <div
                              style={{ backgroundColor: "" }}
                              className={
                                id.includes(e.seat_id)
                                  ? styles["seat-div-14"]
                                  : styles["seat-div-2"]
                              }
                              onClick={() => {
                                // console.log(e.seat_id);
                                id.includes(e.seat_id)
                                  ? setId(id.filter((x) => x !== e.seat_id))
                                  : setId([...id, e.seat_id]);
                                code.includes(e.seat_code)
                                  ? setCode(
                                      code.filter((x) => x !== e.seat_code)
                                    )
                                  : setCode([...code, e.seat_code]);
                              }}
                            ></div>
                          ))
                      )}
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 28 &&
                            index < 35 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      {seats?.map(
                        (e, index) =>
                          index >= 35 &&
                          index < 42 &&
                          (bookedData?.includes(e.seat_id) ? (
                            <div
                              style={{ backgroundColor: "" }}
                              className={styles["seat-div-5"]}
                            ></div>
                          ) : (
                            <div
                              style={{ backgroundColor: "" }}
                              className={
                                id.includes(e.seat_id)
                                  ? styles["seat-div-14"]
                                  : styles["seat-div-2"]
                              }
                              onClick={() => {
                                // console.log(e.seat_id);
                                id.includes(e.seat_id)
                                  ? setId(id.filter((x) => x !== e.seat_id))
                                  : setId([...id, e.seat_id]);
                                code.includes(e.seat_code)
                                  ? setCode(
                                      code.filter((x) => x !== e.seat_code)
                                    )
                                  : setCode([...code, e.seat_code]);
                              }}
                            ></div>
                          ))
                      )}
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 42 &&
                            index < 49 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      {seats?.map(
                        (e, index) =>
                          index >= 49 &&
                          index < 56 &&
                          (bookedData?.includes(e.seat_id) ? (
                            <div
                              style={{ backgroundColor: "" }}
                              className={styles["seat-div-5"]}
                            ></div>
                          ) : (
                            <div
                              style={{ backgroundColor: "" }}
                              className={
                                id.includes(e.seat_id)
                                  ? styles["seat-div-14"]
                                  : styles["seat-div-2"]
                              }
                              onClick={() => {
                                // console.log(e.seat_id);
                                id.includes(e.seat_id)
                                  ? setId(id.filter((x) => x !== e.seat_id))
                                  : setId([...id, e.seat_id]);
                                code.includes(e.seat_code)
                                  ? setCode(
                                      code.filter((x) => x !== e.seat_code)
                                    )
                                  : setCode([...code, e.seat_code]);
                              }}
                            ></div>
                          ))
                      )}
                    </div>
                  </div>
                  {/* Row 5 */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 56 &&
                            index < 63 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      {seats?.map(
                        (e, index) =>
                          index >= 63 &&
                          index < 70 &&
                          (bookedData?.includes(e.seat_id) ? (
                            <div
                              style={{ backgroundColor: "" }}
                              className={styles["seat-div-5"]}
                            ></div>
                          ) : (
                            <div
                              style={{ backgroundColor: "" }}
                              className={
                                id.includes(e.seat_id)
                                  ? styles["seat-div-14"]
                                  : styles["seat-div-2"]
                              }
                              onClick={() => {
                                // console.log(e.seat_id);
                                id.includes(e.seat_id)
                                  ? setId(id.filter((x) => x !== e.seat_id))
                                  : setId([...id, e.seat_id]);
                                code.includes(e.seat_code)
                                  ? setCode(
                                      code.filter((x) => x !== e.seat_code)
                                    )
                                  : setCode([...code, e.seat_code]);
                              }}
                            ></div>
                          ))
                      )}
                    </div>
                  </div>
                  {/* Row 6  */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 70 &&
                            index < 77 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 77 &&
                            index < 79 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                        <div className={styles["seat-div-31"]}></div>
                        {seats?.map(
                          (e, index) =>
                            index >= 81 &&
                            index < 84 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Row 7 */}
                  <div className={styles["seat-div-3"]}>
                    <div className={styles["seat-div-6"]}>
                      <div className={styles["seat-div-4"]}>
                        {seats?.map(
                          (e, index) =>
                            index >= 84 &&
                            index < 91 &&
                            (bookedData?.includes(e.seat_id) ? (
                              <div
                                style={{ backgroundColor: "" }}
                                className={styles["seat-div-5"]}
                              ></div>
                            ) : (
                              <div
                                style={{ backgroundColor: "" }}
                                className={
                                  id.includes(e.seat_id)
                                    ? styles["seat-div-14"]
                                    : styles["seat-div-2"]
                                }
                                onClick={() => {
                                  // console.log(e.seat_id);
                                  id.includes(e.seat_id)
                                    ? setId(id.filter((x) => x !== e.seat_id))
                                    : setId([...id, e.seat_id]);
                                  code.includes(e.seat_code)
                                    ? setCode(
                                        code.filter((x) => x !== e.seat_code)
                                      )
                                    : setCode([...code, e.seat_code]);
                                }}
                              ></div>
                            ))
                        )}
                      </div>
                    </div>
                    <div className={styles["seat-div-4"]}>
                      {seats?.map(
                        (e, index) =>
                          index >= 91 &&
                          index < 98 &&
                          (bookedData?.includes(e.seat_id) ? (
                            <div
                              style={{ backgroundColor: "" }}
                              className={styles["seat-div-5"]}
                            ></div>
                          ) : (
                            <div
                              style={{ backgroundColor: "" }}
                              className={
                                id.includes(e.seat_id)
                                  ? styles["seat-div-14"]
                                  : styles["seat-div-2"]
                              }
                              onClick={() => {
                                // console.log(e.seat_id);
                                id.includes(e.seat_id)
                                  ? setId(id.filter((x) => x !== e.seat_id))
                                  : setId([...id, e.seat_id]);
                                code.includes(e.seat_code)
                                  ? setCode(
                                      code.filter((x) => x !== e.seat_code)
                                    )
                                  : setCode([...code, e.seat_code]);
                              }}
                            ></div>
                          ))
                      )}
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
                      <p>8</p>
                      <p>9</p>
                      <p>10</p>
                      <p>11</p>
                      <p>12</p>
                      <p>13</p>
                      <p>14</p>
                    </div>
                  </div>
                  <div className={styles["seat-div-19"]}>
                    <div className={styles["seat-div-18"]}></div>
                    <div className={styles["seat-div-18"]}></div>
                  </div>
                </div>
              </div>
              <div className={styles["seat-div-21"]}>
                <h1 className={styles["seat-header-1"]}>Seating key</h1>
                <div className={styles["seat-div-24"]}>
                  <aside className={styles["seat-aside-left"]}>
                    <div className={styles["seat-div-22"]}>
                      <Image src={arrowdown} alt="img" />
                      <p className={styles["seat-text-4"]}>A - G</p>
                    </div>
                    <div className={styles["seat-div-22"]}>
                      <div className={styles["seat-div-20"]}></div>
                      <p className={styles["seat-text-4"]}>Available</p>
                    </div>
                    <div className={styles["seat-div-22"]}>
                      <div className={styles["seat-div-23"]}></div>
                      <p className={styles["seat-text-4"]}>Love nest</p>
                    </div>
                  </aside>
                  <aside className={styles["seat-aside-left"]}>
                    <div className={styles["seat-div-22"]}>
                      <Image src={arrowright} alt="img" />
                      <p className={styles["seat-text-4"]}>1 - 14</p>
                    </div>
                    <div className={styles["seat-div-22"]}>
                      <div className={styles["seat-div-25"]}></div>
                      <p className={styles["seat-text-4"]}>Selected</p>
                    </div>
                    <div className={styles["seat-div-22"]}>
                      <div className={styles["seat-div-26"]}></div>
                      <p className={styles["seat-text-4"]}>Sold</p>
                    </div>
                  </aside>
                  <aside></aside>
                </div>
                <div className={styles["seat-div-12"]}>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-20"]}></div>
                    <p className={styles["seat-text-3"]}>Available</p>
                  </div>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-14"]}></div>
                    <p className={styles["seat-text-3"]}>Selected</p>
                  </div>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-23"]}></div>
                    <p className={styles["seat-text-3"]}>Love nest</p>
                  </div>
                  <div className={styles["seat-div-13"]}>
                    <div className={styles["seat-div-16"]}></div>
                    <p className={styles["seat-text-3"]}>Sold</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["seat-div-27"]}>
              <div className={styles["seat-div-30"]}>
                <div className={styles["seat-div-28"]}>
                  <div className={styles["seat-div-29"]}>
                    <p className={styles["seat-text-5"]}>C</p>
                    <Image src={chevron2} alt="img" />
                  </div>
                  <div className={styles["seat-div-29"]}>
                    <p className={styles["seat-text-5"]}>4</p>
                    <Image src={chevron2} alt="img" />
                  </div>
                </div>
                <div className={styles["seat-div-28"]}>
                  <div className={styles["seat-div-29"]}>
                    <p className={styles["seat-text-5"]}>C</p>
                    <Image src={chevron2} alt="img" />
                  </div>
                  <div className={styles["seat-div-29"]}>
                    <p className={styles["seat-text-5"]}>5</p>
                    <Image src={chevron2} alt="img" />
                  </div>
                </div>
                <div className={styles["seat-div-28"]}>
                  <div className={styles["seat-div-29"]}>
                    <p className={styles["seat-text-5"]}>C</p>
                    <Image src={chevron2} alt="img" />
                  </div>
                  <div className={styles["seat-div-29"]}>
                    <p className={styles["seat-text-5"]}>6</p>
                    <Image src={chevron2} alt="img" />
                  </div>
                </div>
              </div>
              <button className={styles["seat-btn-1"]}>Add new seat</button>
            </div>
            <div className={styles["btn-div-1"]}>
              <Link href="/">
                <button className={styles["btn-1"]}>Change your movie</button>
              </Link>
              <form onSubmit={handleSubmit}>
                <button type="submit" className={styles["btn-2"]}>
                  Checkout now
                </button>
              </form>
            </div>
          </aside>
          <aside className={styles["aside-right"]}>
            <h1 className={styles["movie-header-1"]}>Order Info</h1>
            <div className={styles["order-div"]}>
              <div className={styles["order-div-1"]}>
                <div className={styles["order-div-4"]}>
                  <Image
                    width={174}
                    height={70}
                    src={`https://res.cloudinary.com/dedmbkp9a/image/upload/v1669990442/${showData?.image}`}
                    alt="img"
                  />
                </div>
                <h1 className={styles["order-header-1"]}>{showData?.cinema}</h1>
                <div className={styles["order-div-5"]}>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>Movie selected</p>
                    <p className={styles["order-text-2"]}>{showData?.movie}</p>
                  </div>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>
                      {showData?.show_date.slice(0, 10)}
                    </p>
                    <p className={styles["order-text-2"]}>
                      {showData?.time.slice(0, 8)}
                    </p>
                  </div>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>One ticket price</p>
                    <p
                      className={styles["order-text-2"]}
                    >{`Rp ${showData?.price}`}</p>
                  </div>
                  <div className={styles["order-div-2"]}>
                    <p className={styles["order-text-1"]}>Seat choosed</p>
                    <p className={styles["order-text-2"]}>
                      {code.map((x) => {
                        return ` ${x},`;
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <section className={styles["order-section-2"]}>
                <p className={styles["order-text-3"]}>Total Payment</p>
                <p className={styles["order-text-4"]}>
                  Rp {showData?.price * id.length}
                </p>
              </section>
            </div>
          </aside>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
export default Order;
