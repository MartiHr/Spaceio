// import * as authService from '../../../services/authService';

import classNames from 'classnames/bind';
import loginStyles from './Login.module.css';
import formStyles from '../../FormComponents/Form.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useAuth } from '../../../hooks/useAuth';

let cx = classNames.bind(loginStyles, formStyles);
let cxForms = classNames.bind(formStyles);

export const Login = () => {
    const navigate = useNavigate();
    const { currentUser, userLogin } = useAuthContext();

    const loginHandler = async (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));

        if (!currentUser) {
            try {
                await userLogin(email, password);
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        }

        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(user);

        //         setCurrentUser(user);
        //         navigate('/home');
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;

        //         console.log(`Error message: ${errorMessage}, error code: ${errorCode}`);
        //     });
    }

    return (
        <>
            {/* {currentUser.email} */}
            {/* {currentUser !== null ? alert('logged in') : alert('fuck')} */}
            <div className={cx('login-background')}>
                <div className={cx('shape')} />
                <div className={cx('shape')} />
            </div>
            <form className={cx('login-form')} onSubmit={loginHandler}>
                <h3>Login Here</h3>

                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" id="email" name='email' />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password' />

                <button>Log In</button>

                <div className={cxForms('social')}>
                    <div className={cxForms('go')}>
                        <i className="fab fa-google" /> Google
                    </div>
                    <div className={cxForms('fb')}>
                        <i className="fab fa-facebook" /> Facebook
                    </div>
                </div>
            </form>
        </>
    );
}