import { combineReducers } from "redux";
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from 'history';
import peopleReducer from "./people";

export const history = createBrowserHistory()

const rootReducer = combineReducers({
	router: connectRouter(history),
	people: peopleReducer,
})

export default rootReducer;