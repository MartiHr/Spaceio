import classnames from 'classnames/bind';
import styles from './Create.module.css';

const cx = classnames.bind(styles);

export const Create = () => {
    return (
        <form className={cx('create-form')}>
            <h3>Create a publication</h3>

            <label htmlFor="type">Vehicle type</label>
            <input type="text" placeholder="Vehicle type" id="type" />
          
            <label htmlFor="type">Vehicle type</label>
            <input type="text" placeholder="Vehicle type" id="type" />

            <label htmlFor="type">Vehicle type</label>
            <input type="text" placeholder="Vehicle type" id="type" />

            <label htmlFor="type">Vehicle type</label>
            <input type="text" placeholder="Vehicle type" id="type" />

            

            <button className={cx('create-button')}>Create</button>
        </form>
    );
}