import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { create, getAll, getOne } from './services/vehicleService';

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from './components/Home/Home';
import { Login } from './components/FormComponents/Login/Login';
import { Register } from './components/FormComponents/Register/Register';
import { Edit } from './components/FormComponents/Edit/Edit';
import { Catalog } from './components/CardComponents/Catalog/Catalog';
import { Create } from './components/FormComponents/Create/Create';
import { Details } from './components/Details/Details';

function App() {
    const [blackBackground, setBlackBackground] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/login'
            || location.pathname === '/register'
            || location.pathname === '/create') {
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

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAll()
            .then(data => setVehicles(data));
    }, []);


    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        let vehicleData = ({
            ...(Object.fromEntries(formData)),
            likes: 0
        });
        
        create(vehicleData)
            .then(res => console.log(res));

        e.target.reset();
    }

    const [currentVehicle, setCurrentVehicle] = useState({});

    const detailsHandler = (id) => {
        getOne(id)
            .then(vehicle => setCurrentVehicle(vehicle));
    }
    
    const editHandler = (e) => {
        // e.preventDefault();

        // const formData = new FormData(e.target);

        // let vehicleData = ({
        //     ...(Object.fromEntries(formData)),
        //     likes: 0
        // });
        
        // create(vehicleData)
        //     .then(res => console.log(res));

        // e.target.reset();
    }



    return (
        <div className={`app ${blackBackground ? 'app-black' : ''}`}>
            <Header />

            <Routes>
                {/* Another possible way for black background handling */}
                {/* <Route path='/' element={<Home blackBackgroundHandler={blackBackgroundHandler}/>} /> */}
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/create' element={<Create onCreate={createHandler} />} />
                <Route path='/catalog' element={<Catalog vehicles={vehicles} />} />
                <Route path='/edit' element={<Edit onEdit={editHandler}/>} />
                <Route path='/details/:vehicleId' element={<Details onDetails={detailsHandler} vehicle={currentVehicle}/>} />
                {/* <Route path="/*" element={<NotFound />}/> */}
            </Routes>
            {location.pathname !== '/login'
                && location.pathname !== '/register'
                && location.pathname !== '/create'
                && <Footer />}
        </div>
    );
}

export default App;
