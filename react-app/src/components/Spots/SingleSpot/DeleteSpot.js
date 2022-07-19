import { eraseSpot, getSpots } from "../../../store/spots";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const DeleteSpot = ({ spotId }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const onClick = () => {
		dispatch(eraseSpot(spotId));
<<<<<<< HEAD
		dispatch(getSpots())
=======
		dispatch(getSpots());
>>>>>>> 40489992bf37c537456d7f83e1058c10e211dd23
		history.push("/");
	};

	return <button className='deleteSpotBtn' onClick={onClick}>Delete Spot</button>;
};

export default DeleteSpot;
