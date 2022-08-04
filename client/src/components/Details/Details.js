import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { VehicleContext } from "../../contexts/VehicleContext";
import * as vehicleService from "../../services/vehicleService";

export const Details = () => {
    const navigate = useNavigate();
    const { vehicleId } = useParams();
    const { selectVehicle, updateVehicle, removeVehicle } = useContext(VehicleContext);;

    const currentVehicle = selectVehicle(vehicleId);

    useEffect(() => {
        vehicleService.getOne(vehicleId)
            .then(result => updateVehicle(result));
    }, []);

    const onDelete = (id) => {
        vehicleService.remove(id)
            .then(result => removeVehicle(result));
    }

    return (
        <>
            <h1>{currentVehicle.model}</h1>
            <h1>{currentVehicle.likes}</h1>
            <h1>{currentVehicle.price}</h1>
            <h1>{currentVehicle.type}</h1>
            <img src={currentVehicle.imgUrl} alt="" />
            <p>{currentVehicle.description}</p>
            <button onClick={() => navigate(`/edit/${vehicleId}`)}>EDIT</button>
            <button onClick={() => onDelete(vehicleId)}>DELETE</button>
        </>
    );
}