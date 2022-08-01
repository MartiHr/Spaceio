import classnames from 'classnames/bind';
import styles from './Create.module.css';

const cx = classnames.bind(styles);

export const Create = ({createHandler}) => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + './static/images/space-radiance.png'} className={cx('radiance-background')} alt="" />
            <form className={cx('create-form')} onSubmit={createHandler}>
                <h3>Create a publication</h3>

                <label htmlFor="type">Vehicle type</label>
                <input type="text" placeholder="Vehicle type" id="type" />

                <label htmlFor="model">Model</label>
                <input type="text" placeholder="Enter the model" id="model" />

                <label htmlFor="image">Image</label>
                <input type="text" placeholder="Image url" id="image" />

                <label htmlFor="price">Price</label>
                <input type="text" placeholder="Price in $" id="price" />

                <label htmlFor="info">Description</label>
                <textarea placeholder="Description" id="info" rows="10" cols="50" />

                <button className={cx('create-button')}>Create</button>
            </form>
        </>
    );
}