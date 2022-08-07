import styles from './Catalog.module.css';

import classNames from 'classnames/bind';

import { CardItem } from '../CardItem/CardItem';
import { useVehicleContext } from '../../../contexts/VehicleContext';

let cx = classNames.bind(styles);

export const Catalog = () => {

    const { vehicles } = useVehicleContext();

    return (
        <>
            <section className={cx('catalog-wrapper')}>
                <h2 className={cx('catalog-title')}>All vehicles:</h2>
                {vehicles.length > 0
                    ? vehicles?.map(vehicle => <CardItem key={vehicle._id} vehicle={vehicle} />)
                    : <h2>No added vehicles yet!</h2>
                }

            </section>
        </>
    );
}
