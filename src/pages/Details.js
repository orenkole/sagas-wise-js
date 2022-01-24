import { useSelector } from "react-redux"
import {selectPeopleDetails} from "../redux/reducers/peopleDetails/selectors.js";
export default function Details() {
	const details = useSelector(selectPeopleDetails)
	if(details.loading) {
		return (
			<div>Loading...</div>
		)
	}

	const {name, birth_year, skin_color, math} = details.data;
	return(
		<div>
			<h1>{name}</h1>
		</div>
	)
}