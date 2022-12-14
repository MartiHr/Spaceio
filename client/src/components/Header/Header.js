import { NavLink } from 'react-router-dom'

import classNames from 'classnames/bind';
import styles from './Header.module.css';
import { useAuthContext } from '../../contexts/AuthContext';

let cx = classNames.bind(styles);

export const Header = () => {
    const { currentUser } = useAuthContext();

    const setNavStyle = ({ isActive }) => {
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
                <NavLink className={cx('title-link')} to="/">
                    <h1 className={cx('header-title')}>Spaceio</h1>
                </NavLink>
            </div>
            <div className={cx('nav', 'nav-right')}>
                <nav className={cx('navigation')}>
                    <ul className={cx('nav-wrapper')}>
                        <li className={cx('nav-item')}>
                            <NavLink to="/" className={setNavStyle}>Home</NavLink>
                        </li>
                        <li className={cx('nav-item')}>
                            <NavLink to="/catalog" className={setNavStyle}>Catalog</NavLink>
                        </li>
                        {currentUser &&
                            <li className={cx('nav-item')}>
                                <NavLink to="/create" className={setNavStyle}>Create</NavLink>
                            </li>
                        }
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
                        {!currentUser
                            ? <>
                                <li className={cx('nav-item')}>
                                    <NavLink to="/login" className={setNavStyle}>Login</NavLink>
                                </li>
                                <li className={cx('nav-item')}>
                                    <NavLink to="/register" className={setNavStyle}>Register</NavLink>
                                </li>
                            </>
                            : <>
                                <p>{currentUser.email}</p>
                                <li className={cx('nav-item')}>
                                    <NavLink to="/logout" className={setNavStyle}>Logout</NavLink>
                                </li>
                            </>

                        }
                    </ul>
                </nav>
            </div>
        </header >
    );
}
