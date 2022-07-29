export const Header = () => {
    return (
        < header id="head" >
            <div className="nav nav-left">
                <a href="/">
                    <img
                        className="nav-logo nav-item"
                        src="./static/favicons/astronaut.png"
                        alt=""
                    />
                </a>
                <h1>Spaceio</h1>
            </div>
            <div className="nav nav-right">
                <nav className="navigation">
                    <ul className="nav-wrapper">
                        <li className="nav-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/ships">Ships</a>
                        </li>
                        <li className="nav-item">
                            <a href="/rockets">Rockets</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/help">Help</a>
                        </li>
                    </ul>
                </nav>
                <nav className="authentication">
                    <ul className="nav-wrapper">
                        <li className="nav-item">
                            <a href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}