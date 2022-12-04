// import React from 'react'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//import css
import Image from "next/image";
import icon_start from "../../assets/profile/icon_start.png";
import icon_default from "../../assets/icon_default.png";
// import image_jones from "../../assets/profile/image_jones.png";
import styles from "../../styles/Sidebar_profile.module.css";
import profileActions from "../../redux/actions/profile";
import authActions from "../../redux/actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";

export default function Index({ firstname, lastname, username, image }) {
    const token = useSelector((state) => state.auth.userData.token);
    const Id = useSelector((state) => state.auth.userData.id);
    const profiles = useSelector((state) => state.user.profile);
    const router = useRouter();
    // const [image, setImage] = useState("");
    const dispatch = useDispatch()
    const [btnsave, setBtnsave] = useState(false);
    const [show, setShow] = useState(false);
    const [display, setDisplay] = useState();
    const [picture, setPicture] = useState();
    const inputFileRef = React.createRef();
    // const link = process.env.CLOUD_LINK
    console.log(image);


    const inputImage = () => {
        inputFileRef.current.click()
    }

    // const editImageHandler = (e) => {
    //     setDisplay(URL.createObjectURL(e.target.files[0]))
    //     const body = new FormData()
    //     body.append('image', e.target.files[0])
    //     console.log(body);
    // }

    const editImageHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            setDisplay(URL.createObjectURL(event.target.files[0]));
            setPicture(event.target.files[0]);
            console.log(picture);
        }
    };


    const saveImage = () => {
        const getToken = token;
        const formData = new FormData();
        // if (picture) formData.append('image', `https://res.cloudinary.com/dedmbkp9a/image/upload/v1669990442/${picture}`)
        dispatch(profileActions.imageThunk(getToken, {
            image: `https://res.cloudinary.com/dedmbkp9a/image/upload/v1669990442/${image}`,
        }))
    }
    useEffect(() => {
        dispatch(profileActions.userThunk(token))
    }, [dispatch])

    const handleSaveShow = () => {
        setBtnsave(true);
    };
    const handleCancel = () => {
        setDisplay(profiles.image), setBtnsave(false);
    };

    // handleClose, handleShow => Show Modals
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        const data = { token }
        dispatch(authActions.logoutThunk(data)),
            toast.success("Logout Success"),
            setTimeout(() => {
                router.push("/signin");
            }, 2000);
    };
    return (
        <>
            <div className={`${styles['content-all']}`}>
                <div className={styles['content-left']}>
                    <div className={styles['content-info']}>
                        <p className={styles['text-info']}>INFO</p>
                        <div className={styles['content-dot']}>
                            <div className={styles['dot']}></div>
                            <div className={styles['dot']}></div>
                            <div className={styles['dot']}></div>
                        </div>
                    </div>
                    <div className={styles["content-img"]}>
                        <Image className={styles['image_jones']} src={display || `https://res.cloudinary.com/dedmbkp9a/image/upload/v1669990442/${image}` || icon_default} alt="image_jones" width={130} height={130} />
                    </div>
                    <input name='image' type='file' ref={inputFileRef} hidden={true} onChange={editImageHandler} />
                    <div
                        className={btnsave ? "d-none" : `${styles.profile_edit}`}
                        onClick={handleSaveShow}
                    >
                        {/* <i className="fa-solid fa-pencil"></i> */}
                        <div className={`${styles["text-edit"]}`}>
                            <label htmlFor="file">Edit</label>
                        </div>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={inputImage}
                            className="d-none"
                        />
                    </div>
                    <div className={btnsave ? `${styles.profile_button}` : "d-none"}>
                        <button
                            className={styles.btn_save_profile}
                            onClick={() => (saveImage(), setBtnsave(false))}
                        >
                            Save Profile
                        </button>
                        <button
                            className={styles.btn_cancel_profile}
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                    <p className={styles['text-jonas']}>{firstname} {lastname}</p>
                    <p className={styles['text-movie']}>{username}</p>
                    {/* <div className={styles['br-btm']}></div> */}
                </div>
                <div className={styles['content-right']}>
                    <p className={styles['text-loyalty']}>Loyalty Points</p>
                    <div className={styles['content-movie']}>
                        <div className={styles['content-two-move']}>
                            <p className={styles['text-content-movie']}>Moviegoers</p>
                            <Image className={styles['icon_start']} src={icon_start} alt="icon_start" />
                        </div>
                        <div className={styles['content-point']}>
                            <p className={styles['text-320']}>320</p>
                            <p className={styles['text-points']}>points</p>
                        </div>
                    </div>
                    <p className={styles['text-180']}>180 points become a master</p>
                    <div className={styles['br-container']}>
                        <div className={styles['br-wrapper']}>
                            <div className={styles['br-point']}></div>
                        </div>
                        <button className={styles['logout']} onClick={handleShow}>Logout</button>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>are you sure you want to log out?</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        className="fw-bold text-bg-primary text-white"
                        onClick={handleLogout}
                    >
                        Yes
                    </Button>
                    <Button
                        variant="danger"
                        className="fw-bold text-bg-dark text-white"
                        onClick={handleClose}
                    >
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
