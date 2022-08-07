import styles from './About.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export const About = () => {
    return (
        <>
            <section className={cx('about-wrapper')}>
                <div className={cx('about-left')}>
                    <h2>ABOUT</h2>
                    <p>Spaceio is a web application which stores data about space vehicles and presents them in an orderly manner.
                        It was build by using REACT and FIRESTORE as base technologies.
                        The jedi picture is unedited and it is me. 😁</p>

                    <div className={cx('logos-wrapper')}>
                        <img src="/static/images/react-icon.png" alt="" />
                        <img src="/static/images/firestore-logo.png" alt="" />
                    </div>
                </div>
                <div className={cx('about-right')}>
                    <img className={cx('me-img')} src="/static/images/me.jpg" alt="" />
                </div>
            </section>
        </>
    );
}