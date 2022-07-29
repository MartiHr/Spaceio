import classNames from 'classnames/bind';
import styles from './Header.module.css';

let cx = classNames.bind(styles);

export const Header = () => {
    return (    
        <header className={styles.head}>
            <div className={cx('nav', 'nav-left')}>
                <a href="/">
                    <img
                        className={cx('nav-logo', 'nav-item')}
                        src={process.env.PUBLIC_URL + './static/images/astronaut.png'}
                        alt=""
                    />
                </a>
                <h1>Spaceio</h1>
            </div>
            <div className={cx('nav', 'nav-right')}>
                <nav className={cx('navigation')}>
                    <ul className={cx('nav-wrapper')}>
                        <li className={cx('nav-item')}>
                            <a href="/">Home</a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/ships">Ships</a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/rockets">Rockets</a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/about">About</a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/help">Help</a>
                        </li>
                    </ul>
                </nav>
                <nav className={cx('authentication')}>
                    <ul className={cx('nav-wrapper')}>
                        <li className={cx('nav-item')}>
                            <a href="/login">Login</a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/register">Register</a>
                        </li>
                        <li className={cx('nav-item')}>
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}