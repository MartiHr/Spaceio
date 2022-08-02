import classnames from 'classnames/bind';
import styles from './Create.module.css';

const cx = classnames.bind(styles);

export const Create = ({onCreate}) => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + './static/images/space-radiance.png'} className={cx('radiance-background')} alt="" />
            <form className={cx('create-form')} onSubmit={onCreate}>
                <h3>Create a publication</h3>

                <label htmlFor="type">Vehicle type</label>
                <input type="text" placeholder="Vehicle type" id="type" name='type'/>

                <label htmlFor="model">Model</label>
                <input type="text" placeholder="Enter the model" id="model" name='model'/>

                <label htmlFor="image">Image</label>
                <input type="text" placeholder="Image url" id="image" name='imgUrl'/>

                <label htmlFor="price">Price</label>
                <input type="text" placeholder="Price in $" id="price" name='price'/>

                <label htmlFor="info">Description</label>
                <textarea placeholder="Description" id="info" rows="10" cols="50" name='description'/>

                <button className={cx('create-button')}>Create</button>
            </form>
        </>
    );
}