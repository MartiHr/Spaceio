import styles from './Catalog.module.css';

import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import {CardItem} from '../CardItem/CardItem';

let cx = classNames.bind(styles);

export const Catalog = ({vehicles}) => {
    
    console.log(vehicles);

    return (
        <section className={cx('catalog-wrapper')}>
            {vehicles.map(vehicle => <CardItem key={vehicle._id} vehicle={vehicle}/>)}
        </section>
    );
}
