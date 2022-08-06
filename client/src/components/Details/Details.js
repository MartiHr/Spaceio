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
    const [ newComment, setNewComment] = '';

    const currentVehicle = selectVehicle(vehicleId);

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result, vehicleId));

        if (currentUser) {
            setHasLiked(currentVehicle.likes.some(x => x === currentUser?.uid));
            setIsOwner(currentVehicle.ownerId === currentUser?.uid);
        }
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

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
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
            <div className={(cx('comments-wrapper'))}>
                <p className={(cx('comments-title'))}>Comments :</p>

                <div className={(cx('comments-item'))}>
                    <p className={cx('comments-item-email')}>email@gmail.com</p>
                    <p className={cx('comments-item-value')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit itaque vero assumenda illo, adipisci laboriosam exercitationem nostrum veniam porro necessitatibus libero obcaecati deleniti expedita earum culpa velit beatae est.</p>
                </div>
                <div className={(cx('comments-item'))}>
                    <p className={cx('comments-item-email')}>email@gmail.com</p>
                    <p className={cx('comments-item-value')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit itaque vero assumenda illo, adipisci laboriosam exercitationem nostrum veniam porro necessitatibus libero obcaecati deleniti expedita earum culpa velit beatae est.</p>
                </div>
                <div className={(cx('comments-item'))}>
                    <p className={cx('comments-item-email')}>email@gmail.com</p>
                    <p className={cx('comments-item-value')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sit itaque vero assumenda illo, adipisci laboriosam exercitationem nostrum veniam porro necessitatibus libero obcaecati deleniti expedita earum culpa velit beatae est.</p>
                </div>

                <label htmlFor="Comment">Create comment</label>
                <textarea placeholder="Description" id="Comment" rows="10" cols="50" name='description' />
                {/* value={values.description} onChange={changeHandler} onBlur={onErrorHandler} className={cxForms(`${errors.descriptionError.length > 0 ? 'is-invalid' : ''}`)}  */}
                {/* <span>{errors.descriptionError}</span> */}

                <button>Comment</button>
            </div>

        </>
    );
}