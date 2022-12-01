import React from 'react'

//import css
import Image from "next/image";
import icon_start from "../../assets/profile/icon_start.png";
import image_jones from "../../assets/profile/image_jones.png";
import styles from "../Sidebar_profile.module.css";

export default function index() {
    return (
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
                <Image className={styles['image_jones']} src={image_jones} alt="image_jones" />
                <p className={styles['text-jonas']}>Jonas El Rodriguez</p>
                <p className={styles['text-movie']}>Moviegoers</p>
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
                </div>
            </div>
        </div>
    )
}
