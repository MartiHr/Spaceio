import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useVehicleContext } from "../../contexts/VehicleContext";
import * as vehicleService from "../../services/vehicleService";

import styles from './Details.module.css';
import classNames from 'classnames/bind';
import { useAuthContext } from "../../contexts/AuthContext";

let cx = classNames.bind(styles);

export const Details = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const { selectVehicle, updateVehicle, removeVehicle } = useVehicleContext();
    const { currentUser } = useAuthContext();

    const currentVehicle = selectVehicle(vehicleId);

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result, vehicleId));
    }, []);

    const onDelete = (id) => {
        vehicleService.remove(id)
            .then(result => removeVehicle(result));
    }

    return (
        <>
            <div className={cx('details-wrapper')}>
                <div className={cx('details-left-side')}>
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
                        <button onClick={() => () => { }}>LIKE</button>
                        {currentUser
                            ? <>
                                <button onClick={() => navigate(`/edit/${vehicleId}`)}>EDIT</button>
                                <button onClick={() => onDelete(vehicleId)}>DELETE</button>
                            </>
                            : null
                        }

                    </div>

                </div>
            </div>

        </>
    );
}