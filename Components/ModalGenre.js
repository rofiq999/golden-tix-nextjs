import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moviesActions from "../redux/actions/movies";
import styles from "../styles/Modal.module.css";

const ModalConfirm = ({
  open,
  setOpen,
  // category,
  // categoryId,
  addRemoveCategory,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userData.token);
  const genre = useSelector((state) => state.movie.genre);
  // console.log(token);
  // console.log(genre);

  // const addGenre = () => {
  //   console.log(category);
  // };

  useEffect(() => {
    dispatch(moviesActions.getGenreThunk(token));
  }, [dispatch]);
  return (
    <>
      {open && (
        <div>
          <div className={styles.modal}>
            <div className={styles["modal-content"]}>
              <div className={styles["pin-container"]}>
                <div className={styles.title}>
                  <h2 className={styles["h2"]}>Add Genres</h2>
                  <p className={styles["description"]}>
                    Enter genres of movie.
                  </p>
                </div>
                <div className={styles["form-container"]}>
                  <form className={styles["form"]}>
                    <div className={styles["otp-input"]}>
                      {genre.map((e) => {
                        return (
                          <div className={styles["input-container"]}>
                            <input
                              type="checkbox"
                              name={e.genre_name}
                              id={e.genre_id}
                              onChange={(e) => {
                                addRemoveCategory(e.target.name, e.target.id);
                              }}
                            />
                            <label htmlFor="">{e.genre_name}</label>
                          </div>
                        );
                      })}
                    </div>
                    <div onClick={() => setOpen(!open)}>
                      <button className="btn btn-primary">Confirm</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*<div className={styles.modal}>
            <div className={styles["modal-content"]}>
              <div className={styles["modal-header"]}>
                <p className={styles["modal-title"]}>Logout</p>
              </div>
              <div className={styles["modal-body"]}>Are you sure?</div>
              <div className={styles["modal-footer"]}>
                <button className={styles.button}>yes</button>
                <button
                  className={styles.button}
                  onClick={() => setOpen(!open)}
                >
                  no
                </button>
              </div>
            </div>
          </div>*/}
        </div>
      )}
    </>
  );
};

export default ModalConfirm;
