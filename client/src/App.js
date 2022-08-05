import { Routes, Route, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from './components/Home/Home';
import { Login } from './components/FormComponents/Login/Login';
import { Register } from './components/FormComponents/Register/Register';
import { Edit } from './components/FormComponents/Edit/Edit';
import { Catalog } from './components/CardComponents/Catalog/Catalog';
import { Create } from './components/FormComponents/Create/Create';
import { Details } from './components/Details/Details';
import { VehicleProvider } from './contexts/VehicleContext';
import { Logout } from './components/Logout/Logout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuth } from './firebase';

function App() {
    const [blackBackground, setBlackBackground] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login'
            || location.pathname === '/register'
            || location.pathname === '/create'
            || location.pathname.includes('/edit')) {
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

    // const navigate = useNavigate();

    // const auth = getAuth();

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         const uid = user.uid;
    //         navigate('/home')
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });

    const currentUser = useAuth();

    return (
        <div className={`app ${blackBackground ? 'app-black' : ''}`}>
            <Header currentUser={currentUser}/>

            <VehicleProvider>
                <main>
                    <Routes>
                        {/* Another possible way for black background handling */}
                        {/* <Route path='/' element={<Home blackBackgroundHandler={blackBackgroundHandler}/>} /> */}
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login currentUser={currentUser} />} />
                        <Route path='/register' element={<Register currentUser={currentUser} />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/edit/:vehicleId' element={<Edit />} />
                        <Route path='/details/:vehicleId' element={<Details />} />
                        {/* <Route path="/*" element={<NotFound />}/> */}
                    </Routes>
                </main>
            </VehicleProvider>

            {location.pathname !== '/login'
                && location.pathname !== '/register'
                && location.pathname !== '/create'
                && !(location.pathname.includes('/edit'))
                && <Footer />}
        </div>
    );
}

export default App;
