import {all, call, cancel, fork, spawn, take, takeLatest} from "redux-saga/effects";
import loadBasicData from "./initialSagas";
import pageLoaderSaga from "./pageLoader";

export function* fetchPlanets(signal) {
	console.log('LOAD_SOME_DATA starts')

	const response = yield call(
		fetch,
		'https://swapi.dev/api/planets',
		{signal}
	)
	const data = yield call([response, response.json])
	console.log('LOAD_SOME_DATA completed', data)
}

export function* loadOnAction() {
	// yield takeLatest ('LOAD_SOME_DATA', fetchPlanets);
	let task;
	let abortController = new AbortController();

	while(true) {
		yield take('LOAD_SOME_DATA');
		if(task) {
			abortController.abort();
			yield cancel(task);
			abortController = new AbortController();
		}
		task = yield fork(fetchPlanets, abortController.signal);
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