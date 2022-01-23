import {all, call, fork, spawn, take} from "redux-saga/effects";
import loadBasicData from "./initialSagas";
import pageLoaderSaga from "./pageLoader";

export function* fetchPlanets() {
	console.log('LOAD_SOME_DATA starts')

	const response = yield call(fetch, 'https://swapi.dev/api/planets')
	const data = yield call([response, response.json])
	console.log('LOAD_SOME_DATA completed', data)
}

export function* loadOnAction() {
	while(true) {
		yield take ('LOAD_SOME_DATA');
		yield fork(fetchPlanets);
	}
}

export default function* rootSaga() {
	const sagas = [
		loadBasicData,
		pageLoaderSaga,
		loadOnAction
	];

	const retrySagas =  sagas.map(saga => {
		return spawn(function* () {
			while(true) {
				try {
					yield call(saga);
					break;
				} catch(e) {
					console.log(e)
				}
			}
		})
	})
	
	yield all(retrySagas);
}