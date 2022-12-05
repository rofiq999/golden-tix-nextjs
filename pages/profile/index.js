import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//import css
import styles from "../../styles/Profile.module.css";

//import image
import Sidebar from "../../Components/SideBar";

//import components
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
// import Loading from "../../Components/Loading";

import profileActions from "../../redux/actions/profile";
import authActions from "../../redux/actions/auth";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);
  const [btnsave, setBtnsave] = useState(false);
  const [show, setShow] = useState(false);
  const Id = useSelector((state) => state.auth.userData.id);
  const [edit, setEdit] = useState(true);
  const [edit_, setEdit_] = useState(true);
  const profiles = useSelector((state) => state.user.profile);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [type_, setType_] = useState("password");
  const [icon_, setIcon_] = useState("fa-solid fa-eye-slash");
  const [type__, setType__] = useState("password");
  const [icon__, setIcon__] = useState("fa-solid fa-eye-slash");
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

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
    dispatch(profileActions.userThunk(token));

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
  const valueOldpass = (e) => { setOldpass(e.target.value) }
  const valueNewpass = (e) => { setNewpass(e.target.value) }
  const valueConfirmpass = (e) => { setConfirmpass(e.target.value) }


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

  useEffect(() => {
    dispatch(profileActions.userThunk(token))
  }, [dispatch])

  // handleToggle => Show Password
  const handleToggle = () => {
    if (type === "password") {
      setIcon("fa-regular fa-eye");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye-slash");
      setType("password");
    }
  };

  // handleToggle => Show Password
  const handleToggle_ = () => {
    if (type_ === "password") {
      setIcon_("fa-regular fa-eye");
      setType_("text");
    } else {
      setIcon_("fa-solid fa-eye-slash");
      setType_("password");
    }
  };

  // handleToggle => Show Password
  const handleToggle__ = () => {
    if (type__ === "password") {
      setIcon__("fa-regular fa-eye");
      setType__("text");
    } else {
      setIcon__("fa-solid fa-eye-slash");
      setType__("password");
    }
  };



  // handleReset => reset password
  const handleEditPass = () => {
    axios.patch(`${baseUrl}/api/user/edit-password`, {
      oldPassword: oldpass,
      newPassword: newpass,
      confirmPassword: confirmpass
    }, {
      headers: {
        "x-access-token": token
      }
    })
      .then((res) => {
        console.log(res)
        setEdit(true)
        setTimeout(() => {
          // toast.success(res.data.data.msg)
          toast.success("Password updated")
        }, 2000);
      })
      .catch((err) => toast.error("wrong/password"));
    // console.log(erorr);
  }


  // handleClose, handleShow => Show Modals
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    const token = token
    dispatch(authActions.logoutThunk(token)),
      toast.success("Logout Success"),
      setTimeout(() => {
        router.push("/auth/signin");
      }, 2000);
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
                  className={`${styles['buttonedit']} btn btn-outline-primary text-black fw-bold mt-4 ms-4 `}
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
                  <div
                    className={`${styles['buttonedit1']} btn btn-outline-primary text-black fw-bold mt-4 ms-4 `}
                    onClick={() => {
                      setEdit_(!edit);
                      console.log("click");
                    }}
                  >
                    <span className="text-center">Edit</span>
                  </div>
                </div>
                <div className={styles['content-name']}>
                  <div className={styles['input']}>
                    <label className={styles['name']}>Old Password</label>
                    <div className={styles['input-bar']}>
                      <div className={styles['content-number']}></div>
                      <input className={styles['input-name']} type={type} onChange={valueOldpass} disabled={edit_} placeholder='Write your password' />
                      <i className={icon} onClick={handleToggle}></i>
                    </div>
                  </div>
                  <div className={styles['input']}>
                    <label className={styles['name']}>New Password</label>
                    <div className={styles['input-bar']}>
                      <div className={styles['content-number']}></div>
                      <input className={styles['input-name']} type={type_} onChange={valueNewpass} disabled={edit_} placeholder='Confirm your password' />
                      <i className={icon_} onClick={handleToggle_}></i>
                    </div>
                  </div>
                </div>
                <div className={styles['input-confirm']}>
                  <label className={styles['name']}>Confirm Password</label>
                  <div className={styles['input-bar-confirm']}>
                    <div className={styles['content-number']}></div>
                    <input className={styles['input-name']} type={type__} onChange={valueConfirmpass} disabled={edit_} placeholder='Write your password' />
                    <i className={icon__} onClick={handleToggle__}></i>
                  </div>
                </div>
              </div>
              <div className={styles["content-save"]}>
                <button className={styles['update']} onClick={() => {
                  handleSave();
                }}>Update changes</button>
                <button className={styles['save']} onClick={() => {
                  handleEditPass();
                }}>Save Password</button>
              </div>
              <button className={styles['logout']} onClick={handleShow}>Logout</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Golden-Tix </Modal.Title>
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

export default Index;
