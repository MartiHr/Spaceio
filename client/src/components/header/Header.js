import { NavLink } from 'react-router-dom'

import classNames from 'classnames/bind';
import styles from './Header.module.css';

let cx = classNames.bind(styles);

export const Header = () => {
    const setNavStyle = ({isActive}) => {
        return isActive 
            ? cx('active')
            : undefined
    };

    return (
        <header className={styles.head}>
            <div className={cx('nav', 'nav-left')}>
                <NavLink to="/">
                    <img
                        className={cx('nav-logo', 'nav-item')}
                        src={process.env.PUBLIC_URL + './static/images/astronaut.png'}
                        alt=""
                    />
                </NavLink>
                <h1>Spaceio</h1>
            </div>
            <div className={cx('nav', 'nav-right')}>
                <nav className={cx('navigation')}>
                    <ul className={cx('nav-wrapper')}>
                        <li className={cx('nav-item')}>
                            <NavLink to="/" className={setNavStyle}>Home</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/ships" className={setNavStyle}>Ships</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/rockets" className={setNavStyle}>Rockets</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/about" className={setNavStyle}>About</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/help" className={setNavStyle}>Help</NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className={cx('authentication')}>
                    <ul className={cx('nav-wrapper')}>
                        <li className={cx('nav-item')}>
                            <NavLink to="/login" className={setNavStyle}>Login</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/register" className={setNavStyle}>Register</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/logout" className={setNavStyle}>Logout</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}