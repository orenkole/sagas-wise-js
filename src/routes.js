import { Route, Switch } from "react-router";
import App from "./pages/App";
import Details from "./pages/Details";

export const MAIN_ROUTE = 'MAIN_ROUTE';
export const DETAILS_ROUTE = 'PEOPLE_DETAILS_ROUTE';

export const routes = [
	{
		id: MAIN_ROUTE,
		path: '/',
		exact: true,
		component: App
	},
	{
		id: DETAILS_ROUTE,
		path: '/people/:id',
		exact: true,
		component: Details
	}
]

export default function Routes() {
	return (
		<Switch>
			{routes.map(r => {
				const {id, ...props} = r;
				
				return (
					<Route key={id} {...props} />
				)
			})}
		</Switch>
	)
};