import classNames from 'classnames/bind';
import styles from './CardItem.module.css';

let cx = classNames.bind(styles);

export const CardItem = () => {
    return (
        <>
            <div className={cx('card-item')}>
                <div className={cx('card-image-wrapper')}>
                    <img src={process.env.PUBLIC_URL + './static/images/rocket.png'} className={cx('card-image')} alt="" />
                    <p className={cx('card-title')}>Falcon</p>
                </div>

                <a href='/' className={cx('details-button-wrapper')}>
                    <div className={cx('button-shape')}></div>
                    <p className={cx('button-text')}>+</p>
                </a>

                <div className={cx('card-info')}>
                    <div className={cx('card-info-item', 'card-info-likes')}>
                        <i className="fa-solid fa-heart"></i>
                        <p className={cx('card-info-attribute')}>Likes</p>
                        <p className={cx('card-info-value')}>96</p>
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