import classNames from 'classnames/bind';
import styles from './Catalog.module.css';

import {CardItem} from '../CardItem/CardItem';

let cx = classNames.bind(styles);

export const Catalog = () => {
    return (
        <section className={cx('catalog-wrapper')}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />

            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </section>
    );
}