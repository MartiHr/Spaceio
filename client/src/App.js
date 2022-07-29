import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';


function App() {
    const [blackBackground, setBlackBackground] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            setBlackBackground(true);
        } else {
            setBlackBackground(false);
        }

    }, [location]);

    const blackBackgroundHandler = (isBlack) => {
        if (isBlack) {
            setBlackBackground(true);
        } else {
            setBlackBackground(false);
        }
    }

    return (
        <div className={`app ${blackBackground ? 'app-black' : ''}`}>
            <Header />

            <Routes>
                <Route path='/' element={<Home blackBackgroundHandler={blackBackgroundHandler}/>} />
                <Route path='/login' element={<Login />} />
                {/* <Route path="/*" element={<NotFound />}/> */}
            </Routes>
            {location.pathname !== '/login' && <Footer />}
        </div>
    );
}

export default App;
