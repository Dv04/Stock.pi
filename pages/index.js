import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Landing.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Stock.PI | Data Driven Stock Analysis</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/android-chrome-192x192.png" />
            </Head>
            <main>
                <div className={styles.background}></div>
                <nav className={styles.navbar}>
                    <div className={styles.navbar__logo}>
                        <Image
                            src="/logo.png"
                            alt="Stocker.PI Logo"
                            width={90}
                            height={90}
                        />
                        <h1>Stocker.PI</h1>
                    </div>
                    <div className={styles.navbar__links}>
                        <a href="Dashboard">Dashboard</a>
                        <a href="about">About</a>
                        <a href="login">Login</a>
                    </div>
                </nav>
                <div className={styles.hero}>
                    Using Market Sentiments to help ease your{" "}
                    <span className={styles.decision}>Decisions</span>
                </div>
                <div className={styles.hero__subtext}>
                    <p>
                        Empowering Investors with the Power of Sentiment
                        Analysis - Know the Market's Pulse Before It Beats.
                    </p>
                </div>
                <div className={styles.hero__button}>
                    <button
                        style={{
                            backgroundColor: "rgba(70, 121, 240, 0.9)",
                            color: "white",
                            border: "none",
                        }}
                        onClick={() => {
                            console.log(window.location.href);
                            window.location.href = "https://github.com/Dv04/HackInfinity/blob/b7fd7a7a5f42f955333a6d9d9c46362a46d56527/pages/Stock.pdf";
                        }}                    >
                        How it Works
                    </button>
                    <button onClick={() => (window.location.href = "/login")}>
                        Get Started
                    </button>
                </div>
                <div className={styles.barSection}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div
                        className={styles.bar}
                        style={{ height: "2rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "4rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "3rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "6rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "8rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "2rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "6rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "7rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "3rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "5rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "6rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "7rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "5rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "3rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "4rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "1rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "6rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "7rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "4rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "4rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "3rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "5rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{ height: "3rem" }}
                    ></div>
                    <div
                        className={styles.bar}
                        style={{
                            height: "10rem",
                            backgroundColor: "green",
                            width: "12px",
                            borderRadius: "0.2rem",
                        }}
                    ></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </>
    );
}
