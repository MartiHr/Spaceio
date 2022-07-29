import classNames from 'classnames/bind';
import styles from './Login.module.css';

let cx = classNames.bind(styles);

export const Login = () => {
    return (
        <>
            <div className={cx('login-background')}>
                <div className={cx('shape')} />
                <div className={cx('shape')} />
            </div>
            <form className={cx('login-form')}>
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                <button>Log In</button>
                <div className={cx('social')}>
                    <div className={cx('go')}>
                        <i className="fab fa-google" /> Google
                    </div>
                    <div className={cx('fb')}>
                        <i className="fab fa-facebook" /> Facebook
                        {/* <i className={cx('fab', 'fa-facebook')} /> Facebook */}
                    </div>
                </div>
            </form>
        </>
    );
}