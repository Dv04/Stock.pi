import React from "react";
import styles from "About.mou"

const about = () => {
    return (
        <div className={styles.about}>
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className={styles.about__img}>
                                <img src={aboutImg} alt="" className="w-100" />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className={styles.about__content}>
                                <h2>About Us</h2>
                                <p>
                                    Adani Institute of Infrastructure
                                    Engineering (AIIE) is established to equip
                                    the students to become modern day engineers
                                    and managers primarily for the
                                    infrastructure and allied sectors.
                                </p>

                                <div className={styles.about__content}>
                                    <div className=" d-flex gap-5 align-items-center">
                                        <div className={styles.single__counter}>
                                            <span className={styles.counter}>
                                                <CountUp
                                                    start={0}
                                                    end={42}
                                                    duration={2}
                                                    suffix="+"
                                                />
                                            </span>

                                            <p className={styles.counter__title}>
                                                Teachers
                                            </p>
                                        </div>

                                        <div className={styles.single__counter}>
                                            <span className={styles.counter}>
                                                <CountUp
                                                    start={0}
                                                    end={6}
                                                    duration={2}
                                                    suffix="K+"
                                                />
                                            </span>

                                            <p className={styles.counter__title}>
                                                Enrolled Students
                                            </p>
                                        </div>
                                    </div>

                                    <div className=" d-flex gap-5 align-items-center">
                                        <div className={styles.single__counter}>
                                            <span className={styles.counter}>
                                                <CountUp
                                                    start={0}
                                                    end={40}
                                                    duration={2}
                                                    suffix="+"
                                                />
                                            </span>

                                            <p className={styles.counter__title}>
                                                Industry Connections
                                            </p>
                                        </div>

                                        <div className={styles.single__counter}>
                                            <span className={styles.counter}>
                                                <CountUp
                                                    start={0}
                                                    end={5}
                                                    duration={2}
                                                    suffix="K+"
                                                />
                                            </span>

                                            <p className={styles.counter__title}>
                                                Placements
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>)
}

export default about;