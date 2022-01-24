import { combineReducers } from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from 'history';
import peopleReducer from "./people";
import userDetailsReducer from "./peopleDetails";

export const history = createBrowserHistory()

const rootReducer = combineReducers({
	router: connectRouter(history),
	people: peopleReducer,
	peopleDetails: userDetailsReducer,
})

export default rootReducer;