import classNames from 'classnames/bind';
import styles from './Register.module.css';
import formStyles from '../../FormComponents/Form.module.css';

let cx = classNames.bind(styles);
let cxForms = classNames.bind(formStyles);

export const Register = () => {
    return (
        <>
            <div className={cx('register-background')}>
                <div className={cx('shape')} />
                <div className={cx('shape')} />
            </div>
            <form className={cx('register-form')}>
                <h3>Register Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username or Email" id="username" />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                
                <label htmlFor="repassword">Repeat password</label>
                <input type="password" placeholder="Repeat password" id="repassword" />
                
                <button>Sign Up</button>
                
                <div className={cxForms('social')}>
                    <div className={cxForms('go')}>
                        <i className="fab fa-google" /> Google
                    </div>
                    <div className={cxForms('fb')}>
                        <i className="fab fa-facebook" /> Facebook
                        {/* <i className={cxForms('fab', 'fa-facebook')} /> Facebook */}
                    </div>
                </div>
            </form>
        </>
    );
}