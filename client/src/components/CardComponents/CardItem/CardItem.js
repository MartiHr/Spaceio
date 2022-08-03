import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.css';

let cx = classNames.bind(styles);

export const CardItem = ({vehicle}) => {
    return (
        <>
            <div className={cx('card-item')}>
                <div className={cx('card-image-wrapper')}>
                    <img src={vehicle.imgUrl} className={cx('card-image')} alt="" />
                    <p className={cx('card-title')}>{vehicle.model}</p>
                </div>

                <Link to={`/details/${vehicle._id}`} className={cx('details-button-wrapper')}>
                    <div className={cx('button-shape')}></div>
                    <p className={cx('button-text')}>+</p>
                </Link>

                <div className={cx('card-info')}>
                    <div className={cx('card-info-item', 'card-info-likes')}>
                        <i className="fa-solid fa-heart"></i>
                        <p className={cx('card-info-attribute')}>Likes</p>
                        <p className={cx('card-info-value')}>{vehicle.likes}</p>
                    </div>
                    <div className={cx('card-info-item', 'card-info-comments')}>
                        <i className="fa-solid fa-comment"></i>
                        <p className={cx('card-info-attribute')}>Comments</p>
                        <p className={cx('card-info-value')}>106</p>
                    </div>
                    <div className={cx('card-info-item', 'card-info-stars')}>
                        <i className="fa-solid fa-star"></i>
                        <p className={cx('card-info-attribute')}>Stars</p>
                        <p className={cx('card-info-value')}>4.4</p>
                    </div>
                </div>
            </div>
        </>
    );
}