import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import css
import styles from "../../styles/Profile.module.css";

//import image
import Sidebar from "../../Components/Sidebar_Profile";

//import components
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import profileActions from "../../redux/actions/profile";




function Index() {
    const router = useRouter();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.userData.token);

    const Id = useSelector((state) => state.auth.userData.id);
    const [edit, setEdit] = useState(true);
    const profiles = useSelector((state) => state.user.profile);


    const historyHandler = () => {
        router.push("/history");
    };



    //get userId
    const baseUrl = `https://golden-tix-backend.vercel.app`;
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    useEffect(() => {

        dispatch(profileActions.userThunk(token))

        //     // axios
        //     //     .get(
        //     //         `${baseUrl}/api/user/profile`,
        //     //         {
        //     //             headers: {
        //     //                 'x-access-token': token, Id
        //     //             },
        //     //         }
        //     //     )
        //     //     .then((res) => {
        //     //         setFirstName(
        //     //             res.data.data.first_name
        //     //         )
        //     //         setLastName(
        //     //             res.data.data.last_name
        //     //         )
        //     //         setEmail(
        //     //             res.data.data.email
        //     //         )
        //     //         setPhone(
        //     //             res.data.data.phone
        //     //         )
        //     //         // console.log(res.data.data.first_name);
        //     //     })
        //     //     .catch((err) => console.log(err));
    }, [dispatch]);




    const handleFirstname = (e) => {
        // console.log(handleFirstname);
        setFirstName(e.target.value);
    };
    const handleLastname = (e) => {
        // console.log(handleLastname);
        setLastName(e.target.value);
    };
    const handlesetPhone = (e) => {
        // console.log(handlesetPhone);
        setPhone(e.target.value);
    };


    //edit profile
    const handleSave = () => {
        const formData = new FormData();
        if (first_name) formData.append("first_name", first_name);
        if (last_name) formData.append("last_name", last_name);
        if (phone) formData.append("phone", phone);
        axios
            .patch(
                `${baseUrl}/api/user/profile/edit`,
                { first_name, last_name, phone },
                {
                    headers: {
                        'x-access-token': token
                    },
                }
            )
            .then((res) => {
                console.log(res);
                setTimeout(() => {
                    toast.success("update succes");
                }, 2000);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Header />
            <main className={`${styles['content-all']} container-fluid`}>
                <div className={styles['content-account']}>
                    <p className={styles['details-account']}>Details Account</p>
                    <p className={styles['order']} onClick={historyHandler}>Order History</p>
                </div>
                <section className='container'>
                    <div className='row'>
                        <div className={`${styles['content-left']} col-lg-3 col-md-12 col-sm-12`}>
                            <Sidebar firstname={profiles.firstname} lastname={profiles.lastname} username={profiles.username} image={profiles.image} />
                        </div>
                        <div className={`${styles['content-right']} col-lg-9 col-md-12 col-sm-12 `}>
                            <div className={styles['content-input']}>
                                <div className={styles['content-right-one']}>
                                    <p className={styles['text-acount']}>Account Settings</p>
                                    <p className={styles['text-order']} onClick={historyHandler} >Order History</p>
                                </div>
                                <div className={styles['content-detail']}>
                                    <p className={styles['detail']}>Details Information</p>
                                    <div className={styles['content-br']}> </div>
                                </div>
                                <div
                                    className={`${styles.buttonedit} btn btn-outline-warning text-black fw-bold mt-4 ms-4 `}
                                    onClick={() => {
                                        setEdit(!edit);
                                        console.log("click");
                                    }}
                                >
                                    <span className="text-center">Edit</span>
                                </div>
                                <div className={styles['content-name']}>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Frist Name</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='text' disabled={edit} value={first_name} placeholder={profiles.firstname} onChange={handleFirstname} />
                                        </div>
                                    </div>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Last Name</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='text' disabled={edit} value={last_name}
                                                placeholder={profiles.lastname} onChange={handleLastname} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['content-name']}>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Email</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='email' disabled={edit} placeholder={profiles.email} />
                                        </div>
                                    </div>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Phone Number</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}><p>+62 <span className={styles['bor-left']}></span></p></div>
                                            <input className={styles['input-number']} type='tel' value={phone} disabled={edit} placeholder={profiles.phone} onChange={handlesetPhone} />
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
                                            <input className={styles['input-name']} type='password' disabled={edit} placeholder='Write your password' />
                                        </div>
                                    </div>
                                    <div className={styles['input']}>
                                        <label className={styles['name']}>Confirm Password</label>
                                        <div className={styles['input-bar']}>
                                            <div className={styles['content-number']}></div>
                                            <input className={styles['input-name']} type='password' disabled={edit} placeholder='Confirm your password' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={styles['update']} onClick={() => {
                                handleSave();
                            }}>Update changes</button>
                            <button className={styles['logout']}>Logout</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Index;