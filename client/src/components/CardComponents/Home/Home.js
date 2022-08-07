import styles from './Home.module.css';
import classNames from 'classnames/bind';

import { CardItem } from '../CardItem/CardItem';
import { useEffect, useState } from 'react';
import * as vehicleService from '../../../services/vehicleService';

let cx = classNames.bind(styles);

export const Home = () => {
    const [hottestVehicles, setHottestVehicles] = useState([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        vehicleService.getHottest()
            .then(result => {
                setHottestVehicles(result);
                setIsLoading(false);
            })
            .catch(error => alert(error));
    }, []);

    return (
        <>
            <h1 className={cx('home-title')}>Hello, Space Cadet! Take a look at the hottest vehicles!</h1>
            <section className={cx('home-wrapper')}>
                {hottestVehicles.length > 0
                    ? hottestVehicles?.map(vehicle => <CardItem key={vehicle._id} vehicle={vehicle} />)
                    : !loading && <p className={cx('hot-vehicles-none')}>No added vehicles yet!</p>
                }
            </section>
        </>
    );
}