import React from 'react'

//import css
import styles from "../../styles/Profile.module.css";

//import image
import Sidebar from "../../Components/Sidebar_profile/index";



function index() {
    return (
        <>
            <main className={`${styles['content-all']} container-fluid`}>
                <div className={styles['content-account']}>
                    <p className={styles['details-account']}>Details Account</p>
                    <p className={styles['order']}>Order History</p>
                </div>
                <section className='container'>
                    <div className='row'>
                        <div className={`${styles['content-left']} col-lg-3 col-md-12 col-sm-12`}>
                            <Sidebar />
                        </div>
                        <div className={`${styles['content-right']} col-lg-9 col-md-12 col-sm-12 `}>
                            <div className={styles['content-input']}>
                                <div className={styles['content-right-one']}>
                                    <p className={styles['text-acount']}>Account Settings</p>
                                    <p className={styles['text-order']}>Order History</p>
                                </div>
                                <div className={styles['content-detail']}>
                                    <p className={styles['detail']}>Details Information</p>
                                    <div className={styles['content-br']}> </div>
                                </div>
                                <div className={styles['content-name']}>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>First Name</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='text' placeholder='jonas' />
                                        </div>
                                    </div>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Last Name</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='text' placeholder='El Rodriguez' />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['content-name']}>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Email</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='email' placeholder='jonasrodrigu123@gmail.com' />
                                        </div>
                                    </div>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Phone Number</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}><p>+62 <span className={styles['bor-left']}></span></p></div>
                                            <input className={styles['input-number']} type='tel' placeholder='81445687121' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['content-password']}>
                                <div className={styles['content-detail']}>
                                    <p className={styles['privacy']}>Account and Privacy</p>
                                    <div className={styles['content-br']}> </div>
                                </div>
                                <div className={styles['content-name']}>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>New Password</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='text' placeholder='Write your password' />
                                        </div>
                                    </div>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Confirm Password</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='text' placeholder='Confirm your password' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={styles['update']}>Update changes</button>
                            <button className={styles['logout']}>Logout</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default index;