import React from 'react'

//import css
import styles from "../../styles/Tiket.module.css";

//import image
import Image from "next/image";
import logo3 from "../../assets/logo3.png";
import icon_QR_Code_1 from "../../assets/icon_QR_Code_1.png";
import icon_download from "../../assets/icon_download.png";
import icon_printer from "../../assets/icon_printer.png";


function index() {
    return (
        <>
            <main>
                <section className={`${styles['content-all']} container-fluid`}>
                    <div className='container'>
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
                                        <p className={styles['text-spider']}>Spider-Man: Homecoming</p>
                                    </div>
                                    <div className={styles['content-wrap']}>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Date</p>
                                            <p className={styles['text-month']}>07 July</p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Time</p>
                                            <p className={styles['text-month']}>02:00pm</p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Category</p>
                                            <p className={styles['text-month']}>PG-13</p>
                                        </div>
                                    </div>
                                    <div className={styles['content-wrap-sec']}>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Count</p>
                                            <p className={styles['text-month']}>3 pieces</p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Seats</p>
                                            <p className={styles['text-month']}>C4, C5, C6</p>
                                        </div>
                                        <div className={styles['content-describe']}>
                                            <p className={styles['text-date']}>Price</p>
                                            <p className={styles['text-month']}>$30.00</p>
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
        </>
    )
}

export default index;