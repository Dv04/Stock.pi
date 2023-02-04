import React from "react";
import styles from "./../styles/About.module.scss";
import Image from "next/image";


const about = () => {
    return (
        <div className={styles.about}>
            <div className={styles.background}></div>
            <nav className={styles.navbar}>
                <div className={styles.navbar__logo}>
                    <Image
                        src="/logo.png"
                        alt="Stocker.PI Logo"
                        width={90}
                        height={90}
                    />
                </div>
                <div className={styles.navbar__links}>
                    <a href="Dashboard">Dashboard</a>
                    <a href="about">About</a>
                    <a href="login">Login</a>
                </div>
            </nav>
            <div className={styles.parentDiv}>
                <div className={styles.aboutUsTitle}>ABOUT US</div>
                <div className={styles.paragraph}><p>this is the dummy text which has no meaning and is just written just for fun and means nothing to anyone and anyting so have fun and do enjoy the process of learning this is the dummy text which has no meaning and is just written just for fun and means nothing to anyone and anyting so have fun and do enjoy the process of learning this is the dummy text which has no meaning and is just written just for fun and means nothing to anyone and anyting so have fun and do enjoy the process of learning this is the dummy text which has no meaning and is just written just for fun and means nothing to anyone and anyting so have fun and do enjoy the process of learning</p></div>
                <button className={styles.button}>Learn More </button>
            </div>
        </div>)
}

export default about;