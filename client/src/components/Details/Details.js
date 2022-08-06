import { useEffect, useState } from "react"
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
    const [ hasLiked, setHasLiked] = useState(false);
    const [ isOwner, setIsOwner] = useState(false);

    const currentVehicle = selectVehicle(vehicleId);

    console.log(isOwner);

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result, vehicleId));

        setHasLiked(currentVehicle.likes.some(x => x === currentUser.uid));
        setIsOwner(currentVehicle.ownerId === currentUser.uid);
    }, []);

    const onDelete = (id) => {
        vehicleService.remove(id)
            .then(result => removeVehicle(result));
    }

    const likeHandler = (e) => {
        if (!currentVehicle.likes.some(x => x === currentUser.uid)) {
            setHasLiked(true);

            const updatedVehicleData = ({
                ...currentVehicle,
                likes: [...currentVehicle.likes, currentUser.uid]
            })

            return vehicleService.update(vehicleId, updatedVehicleData, currentVehicle)
                .then(result => {
                    updateVehicle(result, vehicleId);
                    navigate(`/details/${vehicleId}`)
                });
        } else {
            alert('You have already liked this post!');
        }
    }

    const unlikeHandler = (e) => {
        if (currentVehicle.likes.some(x => x === currentUser.uid)) {
            setHasLiked(false);

            let updatedVehicleData = ({
                ...currentVehicle,
                likes: (currentVehicle.likes).filter(ownerId => ownerId !== currentUser.uid),
            })

            return vehicleService.update(vehicleId, updatedVehicleData, currentVehicle)
                .then(result => {
                    updateVehicle(result, vehicleId);
                    navigate(`/details/${vehicleId}`)
                });
        } else {
            alert('You have already unliked this post!');
        }
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
                    <p><b>Likes:</b> {currentVehicle.likes.length}</p>
                    <p className={cx('description-title')}><b>Description:</b></p>
                    <p className={cx('description-content')}> {currentVehicle.description}</p>
                    <div className={cx('buttons-wrapper')}>
                        {currentUser
                            ? <>
                                {!hasLiked && <button onClick={likeHandler}>LIKE</button>}
                                {hasLiked && <button onClick={unlikeHandler}>UNLIKE</button>}
                                
                                {isOwner && <button onClick={() => navigate(`/edit/${vehicleId}`)}>EDIT</button>}
                                {isOwner && <button onClick={() => onDelete(vehicleId)}>DELETE</button>}
                            </>
                            : null
                        }

                    </div>

                </div>
            </div>

        </>
    );
}