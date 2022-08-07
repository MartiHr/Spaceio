import styles from './Edit.module.css';
import classnames from 'classnames/bind';
import formStyles from '../../FormComponents/Form.module.css';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useVehicleContext } from '../../../contexts/VehicleContext';
import * as vehicleService from '../../../services/vehicleService';
import { getErrorMessage } from '../../../utils/errorUtil';

const cx = classnames.bind(styles);
let cxForms = classnames.bind(formStyles);

export const Edit = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const { selectVehicle, updateVehicle } = useVehicleContext();

    const currentVehicle = selectVehicle(vehicleId);

    const [values, setValues] = useState({
        type: currentVehicle.type,
        model: currentVehicle.model,
        imgUrl: currentVehicle.imgUrl,
        price: currentVehicle.price,
        description: currentVehicle.description,
    });

    const [errors, setErrors] = useState({
        typeError: '',
        modelError: '',
        imgUrlError: '',
        priceError: '',
        descriptionError: ''
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const setError = (errorField, value) => {
        setErrors(state => ({
            ...state,
            [`${errorField}Error`]: getErrorMessage(errorField, value),
            generalError: ''
        }))
    }

    const onErrorHandler = (e) => {
        const errorField = e.target.name;
        const value = e.target.value;

        setError(errorField, value)
    }

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result, vehicleId));
    }, []);

    const editHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        let vehicleData = Object.fromEntries(formData);

        const hasDataErrors = Object.values(errors).some(error => error.length !== 0);

        if (!hasDataErrors) {
            vehicleService.edit(vehicleId, vehicleData, currentVehicle)
                .then(result => {
                    updateVehicle(result, vehicleId);
                    navigate(`/details/${vehicleId}`)
                })
                .catch(error => alert(error));
        }
    }

    return (
        <>
            <img src={'/static/images/space-radiance.png'} className={cx('radiance-background')} alt="" />
            <form className={cx('edit-form')} onSubmit={editHandler}>
                <h3>Edit publication</h3>

                <label htmlFor="type">Vehicle type</label>
                <input type="text" placeholder="Vehicle type" id="type" name='type' value={values.type} onChange={changeHandler} onBlur={onErrorHandler} className={cxForms(`${errors.typeError.length > 0 ? 'is-invalid' : ''}`)} />
                <span>{errors.typeError}</span>

                <label htmlFor="model">Model</label>
                <input type="text" placeholder="Enter the model" id="model" name='model' value={values.model} onChange={changeHandler} onBlur={onErrorHandler} className={cxForms(`${errors.modelError.length > 0 ? 'is-invalid' : ''}`)} />
                <span>{errors.modelError}</span>

                <label htmlFor="image">Image</label>
                <input type="text" placeholder="Image url" id="image" name='imgUrl' value={values.imgUrl} onChange={changeHandler} onBlur={onErrorHandler} className={cxForms(`${errors.imgUrlError.length > 0 ? 'is-invalid' : ''}`)} />
                <span>{errors.imgUrlError}</span>

                <label htmlFor="price">Price</label>
                <input type="number" placeholder="Price in $" id="price" name='price' value={values.price} onChange={changeHandler} onBlur={onErrorHandler} className={cxForms(`${errors.priceError.length > 0 ? 'is-invalid' : ''}`)} />
                <span>{errors.priceError}</span>

                <label htmlFor="info">Description</label>
                <textarea placeholder="Description" id="info" rows="10" cols="50" name='description' value={values.description} onChange={changeHandler} onBlur={onErrorHandler} className={cxForms(`${errors.descriptionError.length > 0 ? 'is-invalid' : ''}`)} />

                <span>{errors.descriptionError}</span>
                <button className={cx('create-button')}>Edit</button>
            </form>
        </>
    );
}