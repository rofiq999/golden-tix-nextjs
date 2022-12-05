
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//import css
import styles from "../../styles/Tiket.module.css";

//import components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

//import image
import Image from "next/image";
import logo3 from "../../assets/logo3.png";
import icon_QR_Code_1 from "../../assets/icon_QR_Code_1.png";
import icon_download from "../../assets/icon_download.png";
import icon_printer from "../../assets/icon_printer.png";

import { useRouter } from "next/router";
import authActions from "../../redux/actions/auth";
function index() {
    // const [qrCodeText, setQRCodeText] = useState("");
    // const [showPrint, setShowPrint] = useState("d-block");
    const token = useSelector((state) => state.auth.userData.token);
    const router = useRouter();
    const [ticket, setTicket] = useState({});
    const [seat, setSeat] = useState([]);
    const { id } = router.query;
    // const [data, setData] = useState([]);
    const LINK = process.env.NEXT_PUBLIC_BACKEND_LINK;

    useEffect(() => {
        const baseUrl = `${LINK}api/booking/ticket/detail/Golden-tix-424916`;
        axios
            .get(baseUrl,
                {
                    headers: {
                        "x-access-token": token
                    }
                })
            .then((res) => {
                console.log(res);
                // setData(res.data.data);
                setTicket(res.data.data);
                setSeat(res.data.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const costing = (price) => {
        return (
            "IDR " +
            parseFloat(price)
                .toFixed()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
    };
    // console.log(ticket.seats);
    return (
        <>
            <Header />
            <main>
                <section className={`${styles['content-all']} container-fluid`}>
                    <div className={`${styles['content-container']} container`}>
                        <div className={styles['content']}>
                            <p className={styles['text-payment']}>Proof of Payment</p>
                            <div className={`${styles['content-main']} row`}>
                                <div className={`${styles['content-left']} col-xl-8 col-sm-12 col-md-12`}>
                                    <div className={`${styles['content-tix']} container`} >
                                        <Image src={logo3} alt='logo3' width={100} height={40} />
                                        <p className={styles['text-admit']}>Admit One</p>
                                    </div>
                                    <div className={styles['content-movie']}>
                                        <p className={styles['text-movie']}>Movie</p>
                                        <p className={styles['text-spider']}>{seat.movie_name
                                        }</p>
                                    </div>
                                    <div className={styles['content-wrap']}>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Date</p>
                                            <p className={styles['text-month']}>{new Date(seat.show_date
                                            ).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })
                                            }</p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Time</p>
                                            <p className={styles['text-month']}> {seat.time}</p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Category</p>
                                            <p className={styles['text-month']}>{seat.category
                                            }</p>
                                        </div>
                                    </div>
                                    <div className={styles['content-wrap-sec']}>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Count</p>
                                            <p className={styles['text-month']}>{seat.ticket_total
                                            }</p>
                                        </div>

                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Seats</p>
                                            <p className={styles['text-month']}> {ticket.seats}  </p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Price</p>
                                            <p className={styles['text-month']}>{costing(ticket.price)
                                            }</p>
                                        </div>
                                    </div>
                                    <div className={styles['bor-total']}>
                                        <p className={styles['text-download']}>Total</p>
                                        <p className={styles['text-download']}>$30.00</p>
                                    </div>
                                </div>
                                <div className={`${styles['content-right']} col-xl-4 col-md-12 col-sm-12`}>
                                    <div className={styles['content-tix']}>
                                        <Image src={logo3} alt='logo3' width={100} height={40} />
                                    </div>
                                    <div className={styles['content-Qr']}>
                                        <Image src={icon_QR_Code_1} alt='icon_QR_Code_1' width={230} height={210} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles['content-end']}>
                                <div className={styles['bor-download']}>
                                    <Image src={icon_download} alt='icon_download' />
                                    <p className={styles['text-download']}>Download</p>
                                </div>
                                <div className={styles['bor-download']}>
                                    <Image src={icon_printer} alt='icon_printer' />
                                    <p className={styles['text-download']}>Print</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default index;