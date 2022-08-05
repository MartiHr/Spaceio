import styles from './Catalog.module.css';

import classNames from 'classnames/bind';

import { CardItem } from '../CardItem/CardItem';
import { useVehicleContext } from '../../../contexts/VehicleContext';

let cx = classNames.bind(styles);

export const Catalog = () => {

    const { vehicles } = useVehicleContext();

    console.log(vehicles);

    return (
        <section className={cx('catalog-wrapper')}>
            {vehicles?.map(vehicle => <CardItem key={vehicle._id} vehicle={vehicle} />)}
        </section>
    );
}
