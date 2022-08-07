/* eslint-disable jsx-a11y/alt-text */
import styles from './NotFound.module.css';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

let cx = classNames.bind(styles);

export const NotFound = () => {
    return (
        <div>
            <div className={cx('star', 'bg-purple')}>
                <div className={styles["central-body"]}>
                    <img
                        className={styles["image-404"]}
                        src="http://salehriaz.com/404Page/img/404.svg"
                        width="300px"
                    />
                    <Link
                        to='/'
                        className={styles["btn-go-home"]}
                    >
                        GO BACK HOME
                    </Link>
                </div>
                <div className={styles["objects"]}>
                    <img
                        className={styles["object_rocket"]}
                        src="http://salehriaz.com/404Page/img/rocket.svg"
                        width="40px"
                    />
                    <div className={styles["earth-moon"]}>
                        <img
                            className={styles["object_earth"]}
                            src="http://salehriaz.com/404Page/img/earth.svg"
                            width="100px"
                        />
                        <img
                            className={styles["object_moon"]}
                            src="http://salehriaz.com/404Page/img/moon.svg"
                            width="80px"
                        />
                    </div>
                    <div className={styles["box_astronaut"]}>
                        <img
                            className={styles["object_astronaut"]}
                            src="http://salehriaz.com/404Page/img/astronaut.svg"
                            width="140px"
                        />
                    </div>
                </div>
                <div className={styles["glowing_stars"]}>
                    <div className={styles["star" ]}/>
                    <div className={styles["star" ]}/>
                    <div className={styles["star" ]}/>
                    <div className={styles["star" ]}/>
                    <div className={styles["star" ]}/>
                </div>
            </div>

        </div>
    )
}