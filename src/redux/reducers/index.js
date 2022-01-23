import { combineReducers } from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from 'history';
import peopleReducer from "./people";

const initial = {
	blog: {}
}

export const history = createBrowserHistory()

export function appReducer(state = initial, action) {
	switch(action.type) {
		case 'BLOG_LOADED': 
			return {
				...state,
				blog: action.payload
			}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	app: appReducer,
	router: connectRouter(history),
	people: peopleReducer,
})

export default rootReducer;