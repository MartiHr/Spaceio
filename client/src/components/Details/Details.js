import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useVehicleContext } from "../../contexts/VehicleContext";
import * as vehicleService from "../../services/vehicleService";

import nextId from 'react-id-generator';
import styles from './Details.module.css';
import classNames from 'classnames/bind';
import { useAuthContext } from "../../contexts/AuthContext";

let cx = classNames.bind(styles);

export const Details = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const { selectVehicle, updateVehicle, removeVehicle } = useVehicleContext();
    const { currentUser } = useAuthContext();

    const [hasLiked, setHasLiked] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    const [newComment, setNewComment] = useState('');
    const [commentError, setCommentError] = useState(true);

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
        if (window.confirm('Do you really want to delete this vehicle?')) {
            vehicleService.remove(id)
                .then(result => removeVehicle(result))
                .catch(error => alert(error));
        }
    }

    const likeHandler = (e) => {
        if (!currentVehicle.likes.some(x => x === currentUser.uid)) {
            setHasLiked(true);

            const newLikes = [...currentVehicle.likes, currentUser.uid];

            return vehicleService.updateLikes(vehicleId, currentVehicle, newLikes)
                .then(result => {
                    updateVehicle(result, vehicleId);
                });
        } else {
            alert('You have already liked this post!');
        }
    }

    const unlikeHandler = (e) => {
        if (currentVehicle.likes.some(x => x === currentUser.uid)) {
            setHasLiked(false);

            const newLikes = (currentVehicle.likes).filter(ownerId => ownerId !== currentUser.uid);

            return vehicleService.updateLikes(vehicleId, currentVehicle, newLikes)
                .then(result => {
                    updateVehicle(result, vehicleId);
                });
        } else {
            alert('You have already unliked this post!');
        }
    }

    const changeHandler = (e) => {
        setNewComment(e.target.value);
    }

    const onErrorHandler = (e) => {
        if (newComment.length < 5) {
            setCommentError('Comment should be at least 5 character')
        } else {
            setCommentError('');
        }
    }

    const addCommentHandler = (e) => {
        if (commentError.length === 0 && commentError !== false) {
            setCommentError('');

            const newCommentData = { comment: { email: currentUser.email, value: newComment } };
            const newComments = [...currentVehicle.comments, newCommentData];

            return vehicleService.updateComments(vehicleId, currentVehicle, newComments)
                .then(result => {
                    updateVehicle(result, vehicleId);
                    setNewComment('');
                });
        } else {
            setCommentError('Comment should be at least 5 character');
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
            <div className={(cx('comments-wrapper'))}>
                <p className={(cx('comments-title'))}>Comments :</p>

                {currentVehicle.comments?.length > 0
                    ? currentVehicle.comments.map(x => x.comment).map(comment =>
                        <div key={nextId()} className={(cx('comments-item'))}>
                            <p className={cx('comments-item-email')}>{comment.email}: </p>
                            <p className={cx('comments-item-value')}>{comment.value}</p>
                        </div>
                    )
                    : <h2 className={cx('no-comment')}>No comment yet!</h2>
                }

                {currentUser &&
                    <>
                        <label htmlFor="comment">Create comment</label>
                        <textarea placeholder="Description" id="comment" rows="10" cols="50" name='newComment' value={newComment} onChange={changeHandler} onBlur={onErrorHandler} />
                        <span>{commentError}</span>

                        <button onClick={addCommentHandler}>Comment</button>
                    </>
                }

            </div>

        </>
    );
}