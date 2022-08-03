import styles from './Edit.module.css';

import classnames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const cx = classnames.bind(styles);

export const Edit = ({
    onEdit,
    onDetails,
    vehicle
}) => {
    const {vehicleId} = useParams();

    useEffect(() => {
        onDetails(vehicleId);
    }, []);

    return (
        <>
            <img src={process.env.PUBLIC_URL + './static/images/space-radiance.png'} className={cx('radiance-background')} alt="" />
            <form className={cx('edit-form')} onSubmit={(e) => onEdit(e, vehicleId)}>
                <h3>Edit publication</h3>

                <label htmlFor="type">Vehicle type</label>
                <input type="text" placeholder="Vehicle type" id="type" name='type' />

                <label htmlFor="model">Model</label>
                <input type="text" placeholder="Enter the model" id="model" name='model' />

                <label htmlFor="image">Image</label>
                <input type="text" placeholder="Image url" id="image" name='imgUrl' />

                <label htmlFor="price">Price</label>
                <input type="text" placeholder="Price in $" id="price" name='price' />

                <label htmlFor="info">Description</label>
                <textarea placeholder="Description" id="info" rows="10" cols="50" name='description' />

                <button className={cx('create-button')}>Edit</button>
            </form>
        </>
    );
}