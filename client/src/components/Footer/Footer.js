import classNames from 'classnames/bind';
import styles from './Footer.module.css';

let cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <footer>
                <p className={cx('credits')}>© 2022 Martin Hristov</p>
        </footer>
    );
}
