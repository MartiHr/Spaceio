import { createContext, useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import * as vehicleService from '../services/vehicleService';

export const VehicleContext = createContext();

const vehicleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_VEHICLES':
            return action.payload.slice();
        case 'ADD_VEHICLE':
            return [...state, action.payload];
        case 'UPDATE_VEHICLE':
            return state.map(x => x._id === action.vehicleId ? action.payload : x);
        case 'REMOVE_VEHICLE':
            return state.filter(x => x._id !== action.vehicleId);
        default:
            return state;
    }
}

export const VehicleProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [vehicles, dispatch] = useReducer(vehicleReducer, []);

    useEffect(() => {
        vehicleService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_VEHICLES',
                    payload: result
                };

                dispatch(action);
            })
    }, []);

 
    const addVehicle = (vehicleData) => {
        dispatch({
            type: 'ADD_VEHICLE',
            payload: vehicleData
        });

        navigate('/catalog');
    }
   
    const updateVehicle = (vehicleData, vehicleId) => {
        // debugger

        dispatch({
            type: 'UPDATE_VEHICLE',
            payload: vehicleData,
            vehicleId
        });
    }

    const removeVehicle = (vehicleId) => {
        dispatch({
            type: 'REMOVE_VEHICLE',
            vehicleId
        });

        navigate('/catalog');
    }

    const selectVehicle = (vehicleId) => {
        return vehicles.find(x => x._id === vehicleId) || {};
    };

    return (
        <VehicleContext.Provider value={{
            vehicles,
            addVehicle,
            updateVehicle,
            removeVehicle,
            selectVehicle,
        }}>
            {children}
        </VehicleContext.Provider>
    );
}


export const useVehicleContext = () => {
    const context = useContext(VehicleContext);

    return context;
};