const initial = {
	people: []
}

export default function reducer(state = initial, action) {
	switch(action.type) {
		case "SET_PEOPLE": {
			return {
				...state,
				people: [
					...state.people,
					...action.payload
				]
			}
		}
		default:
			return state;
	}
}