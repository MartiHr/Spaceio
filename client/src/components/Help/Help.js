import styles from './Help.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export const Help = () => {
    return (
        <>
            <section className={cx('about-wrapper')}>
                <h2>Basic guide for navigating the website</h2>
                
                <h3>Guest pages functionallity :</h3>
                <ol>
                    <li>
                        <p>Home - You are able to see the top three posts with the mosts likes</p>
                    </li>
                    <li>
                        <p>Cataolog - The place where all posts are shown</p>
                    </li>
                    <li>
                        <p>Details - Here you could find more information regarding certain vehicle</p>
                    </li>
                    <li>
                        <p>About - See more information regarding the website itself</p>
                    </li>
                    <li>
                        <p>Login - The place where already register user authenticate themselves</p>
                    </li>
                    <li>
                        <p>Register - The page where a guest should go in order to create user profiles</p>
                    </li>
                </ol>

                <h3>Authenticated users functionallity :</h3>
                <ol>
                    <li>
                        <p>Create - You are able to create new vehicle posts</p>
                    </li>
                    <li>
                        <p>Edit - You are also able to edit the posts you have created</p>
                    </li>
                    <li>
                        <p>Like - The place where all posts are shown</p>
                    </li>
                    <li>
                        <p>Delete - You are able to delete your own posts</p>
                    </li>
                    <li>
                        <p>Comment - You can comment under any vehicle post</p>
                    </li>
                </ol>
                
            </section>
        </>
    );
}