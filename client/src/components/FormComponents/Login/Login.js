import classNames from 'classnames/bind';
import loginStyles from './Login.module.css';
import formStyles from '../../FormComponents/Form.module.css';

let cx = classNames.bind(loginStyles, formStyles);
let cxForms = classNames.bind(formStyles);

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
                <input type="text" placeholder="Username or Email" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                
                <button>Log In</button>
                
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