import classNames from 'classnames/bind';
import styles from './Register.module.css';
import formStyles from '../../FormComponents/Form.module.css';

import * as authService from '../../../services/authService';

import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useState } from 'react';

let cx = classNames.bind(styles);
let cxForms = classNames.bind(formStyles);

const errorMessages = {
    emailError: 'Email should be longer than 3 characters',
    passwordError: 'Password should be at least 6 characters long',
    rePassError: 'Password and repeat password do not match'
}

function setError(errorField, value) {
    switch (errorField) {
        case 'email':
            return value.length <= 3 ? errorMessages.emailError : '';
        case 'password':
            return value.length < 6 ? errorMessages.passwordError : '';
        default:
            return '';
    }
}

export const Register = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuthContext();

    const [values, setValues] = useState({
        email: '',
        password: '',
        rePass: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        rePassError: '',
        generalError: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }


    const onBlurHandler = (e) => {
        const errorField = e.target.name;
        const value = e.target.value;

        setErrors(state => ({
            ...state,
            [`${errorField}Error`]: setError(errorField, value),
            generalError: ''
        }))
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        const { email, password, rePass } = Object.fromEntries(new FormData(e.target));

        if (password !== rePass) {
            setErrors(state => ({ ...state, rePassError: errorMessages.rePassError }));
            return;
        }

        if (!currentUser) {
            try {
                await authService.register(email, password);
                navigate('/');
            } catch (error) {
                const errorMessage = error.message.split('Firebase: ').pop();

                setErrors(state => ({
                    ...state,
                    generalError: errorMessage
                }))
            }
        }
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
                <input type="text" placeholder="Email" id="email" name='email' value={values.email} onChange={changeHandler} onBlur={onBlurHandler} className={errors.emailError.length > 0 ? cxForms('is-invalid') : 'a'}/>
                <span>{errors.emailError}</span>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name='password' value={values.password} onChange={changeHandler} onBlur={onBlurHandler} className={errors.passwordError.length > 0 ? cxForms('is-invalid') : 'a'}/>
                <span>{errors.passwordError}</span>


                <label htmlFor="rePass">Repeat password</label>
                <input type="password" placeholder="Repeat password" id="rePass" name='rePass' value={values.rePass} onChange={changeHandler} onBlur={onBlurHandler} className={errors.rePassError.length > 0 ? cxForms('is-invalid') : 'a'}/>
                <span>{errors.rePassError}</span>
                <span>{errors.generalError}</span>

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