import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { VehicleContext } from "../../contexts/VehicleContext";
import * as vehicleService from "../../services/vehicleService";

import styles from './Details.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export const Details = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const { selectVehicle, updateVehicle, removeVehicle } = useContext(VehicleContext);;

    const currentVehicle = selectVehicle(vehicleId);

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result));
    }, []);

    const onDelete = (id) => {
        vehicleService.remove(id)
            .then(result => removeVehicle(result));
    }

    return (
        <>
            <div className={cx('details-wrapper')}>
                <div className={cx('details-left-side')}>
                    {/* <img src={'/static/images/space-radiance.png'} className={cx('details-background')} alt="" /> */}
                    {/* <img src={'/static/images/geometric-backround.jpg'} className={cx('details-background')} alt="" /> */}
                    <img src={currentVehicle.imgUrl} alt="" />
                </div>
                <div className={cx('details-right-side')}>
                    <p><b>Type:</b> {currentVehicle.type}</p>
                    <p><b>Model:</b> {currentVehicle.model}</p>
                    <p><b>Price:</b> {currentVehicle.price} $</p>
                    <p><b>Likes:</b> {currentVehicle.likes}</p>
                    <p className={cx('description-title')}><b>Description:</b></p>
                    <p className={cx('description-content')}> {currentVehicle.description}</p>
                    <div className={cx('buttons-wrapper')}>
                        <button onClick={() => navigate(`/edit/${vehicleId}`)}>EDIT</button>
                        <button onClick={() => onDelete(vehicleId)}>DELETE</button>
                        <button onClick={() => () => { }}>LIKE</button>
                    </div>
                    
                </div>
            </div>

        </>
    );
}