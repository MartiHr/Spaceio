import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from './components/Home/Home';
import { Login } from './components/FormComponents/Login/Login';
import { Register } from './components/FormComponents/Register/Register';


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

    // Another possible way for black background handling
    // Might also try doing it through context, (not bad idea to see if custom hook could be used too)

    // const blackBackgroundHandler = (isBlack) => {
    //     if (isBlack) {
    //         setBlackBackground(true);
    //     } else {
    //         setBlackBackground(false);
    //     }
    // }

    return (
        <div className={`app ${blackBackground ? 'app-black' : ''}`}>
            <Header />

            <Routes>
                {/* Another possible way for black background handling */}
                {/* <Route path='/' element={<Home blackBackgroundHandler={blackBackgroundHandler}/>} /> */}
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {/* <Route path="/*" element={<NotFound />}/> */}
            </Routes>
            {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
        </div>
    );
}

export default App;
