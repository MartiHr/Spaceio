import classNames from 'classnames/bind';
import styles from './Register.module.css';
import formStyles from '../../FormComponents/Form.module.css';

import * as authService from '../../../services/authService';

let cx = classNames.bind(styles);
let cxForms = classNames.bind(formStyles);

export const Register = () => {
    const registerHandler = (e) => {
        e.preventDefault();

        const {email, password} = Object.fromEntries(new FormData(e.target));
        
        authService.register(email, password);
    }

    return (
        <>
            <div className={cx('register-background')}>
                <div className={cx('shape')} />
                <div className={cx('shape')} />
            </div>
            <form className={cx('register-form')} onSubmit={registerHandler}>
                <h3>Register Here</h3>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" id="email" name='email' />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password' />

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