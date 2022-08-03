import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";

export const Details = ({ vehicle, onDetails, onDelete }) => {
    const {vehicleId} = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        onDetails(vehicleId);
    }, []);

    return (
        <>
            <h1>{vehicle.model}</h1>
            <h1>{vehicle.likes}</h1>
            <h1>{vehicle.price}</h1>
            <h1>{vehicle.type}</h1>
            <img src={vehicle.imgUrl} alt="" />
            <p>{vehicle.description}</p>
            <button onClick={() => navigate(`/edit/${vehicleId}`)}>EDIT</button>
            <button onClick={() => onDelete(vehicleId)}>DELETE</button>
        </>
    );
}