import { createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import * as vehicleService from '../services/vehicleService';

export const VehicleContext = createContext();

const vehicleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_VEHICLES':
            return [...action.payload]
        case 'ADD_VEHICLE':
            return [...state, action.payload];
        case 'EDIT_VEHICLE':
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

    const selectVehicle = (vehicleId) => {
        return vehicles.find(x => x._id === vehicleId) || {};
    };

    const addVehicle = (vehicleData) => {
        dispatch({
            type: 'ADD_VEHICLE',
            payload: vehicleData
        });

        navigate('/');
    }
   
    const editVehicle = (vehicleData, vehicleId) => {
        dispatch({
            type: 'EDIT_VEHICLE',
            payload: vehicleData,
            vehicleId
        });

        navigate(`/details/${vehicleId}`);
    }


    const removeVehicle = (vehicleId) => {
        dispatch({
            type: 'REMOVE_VEHICLE',
            vehicleId
        });
    }

    // const getVehicleDetails = (vehicleId, vehicleDetails) => {
    //     dispatch({
    //         type: 'GET_VEHICLE_DETAILS',
    //         payload: vehicleDetails,
    //         vehicleId,
    //     })
    // }

    return (
        <VehicleContext.Provider value={{
            vehicles,
            addVehicle,
            editVehicle,
            // addComment,
            // getVehicleDetails,
            selectVehicle,
            removeVehicle
        }}>
            {children}
        </VehicleContext.Provider>
    );
}