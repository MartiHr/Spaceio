import styles from './Header.module.css';

export const Header = () => {
    return (    
        <header className={styles.head}>
            <div className={`${styles.nav} ${styles['nav-left']}`}>
                <a href="/">
                    <img
                        className={`${styles['nav-logo']} ${styles['nav-item']}`}
                        src={process.env.PUBLIC_URL + './static/images/astronaut.png'}
                        alt=""
                    />
                </a>
                <h1>Spaceio</h1>
            </div>
            <div className={`${styles['nav']} ${styles['nav-right']}`}>
                <nav className={styles['navigation']}>
                    <ul className={styles['nav-wrapper']}>
                        <li className={styles['nav-item']}>
                            <a href="/">Home</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="/ships">Ships</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="/rockets">Rockets</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="/about">About</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="/help">Help</a>
                        </li>
                    </ul>
                </nav>
                <nav className={styles['authentication']}>
                    <ul className={styles['nav-wrapper']}>
                        <li className={styles['nav-item']}>
                            <a href="/login">Login</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="/register">Register</a>
                        </li>
                        <li className={styles['nav-item']}>
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}