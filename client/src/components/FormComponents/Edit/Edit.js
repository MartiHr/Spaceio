import styles from './Edit.module.css';
import classnames from 'classnames/bind';

import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { VehicleContext } from '../../../contexts/VehicleContext';
import * as vehicleService from '../../../services/vehicleService';

const cx = classnames.bind(styles);

export const Edit = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const { selectVehicle, updateVehicle } = useContext(VehicleContext);

    const currentVehicle = selectVehicle(vehicleId);

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result));
    }, []);

    const editHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        let vehicleData = Object.fromEntries(formData);

        vehicleService.edit(vehicleId, vehicleData, currentVehicle)
            .then(result => {
                updateVehicle(result, vehicleId);
                navigate(`/details/${vehicleId}`)
            });
    }

    return (
        <>
            <img src={'/static/images/space-radiance.png'} className={cx('radiance-background')} alt="" />
            <form className={cx('edit-form')} onSubmit={editHandler}>
                <h3>Edit publication</h3>

                <label htmlFor="type">Vehicle type</label>
                <input type="text" placeholder="Vehicle type" id="type" name='type' defaultValue={currentVehicle.type} />

                <label htmlFor="model">Model</label>
                <input type="text" placeholder="Enter the model" id="model" name='model' defaultValue={currentVehicle.model}/>

                <label htmlFor="image">Image</label>
                <input type="text" placeholder="Image url" id="image" name='imgUrl' defaultValue={currentVehicle.imgUrl}/>

                <label htmlFor="price">Price</label>
                <input type="text" placeholder="Price in $" id="price" name='price' defaultValue={currentVehicle.price}/>

                <label htmlFor="info">Description</label>
                <textarea placeholder="Description" id="info" rows="10" cols="50" name='description' defaultValue={currentVehicle.description}/>

                <button className={cx('create-button')}>Edit</button>
            </form>
        </>
    );
}