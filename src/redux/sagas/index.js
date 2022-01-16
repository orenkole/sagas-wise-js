import {
	take,
	takeEvery,
	put,
	call,
	fork,
	join,
} from "redux-saga/effects";

async function swapiGet(pattern) {
	const request = await fetch(`http://swapi.dev/api/${pattern}`)
	const data = await request.json();
	return data;
}

export function* loadPeople() {
	const people = yield call(swapiGet, 'people');
	yield put({type: "SET_PEOPLE", payload: people.results})
	return people;
}

export function* loadPlanets() {
	const planets = yield call(swapiGet, 'planets');
	yield put({type: "SET_PLANETS", payload: planets.results});
}

export function* workerSaga() {
	const task = yield fork(loadPeople);
	yield spawn(loadPlanets);

	const people = yield join(task);
	console.log('people join: ', people);
}

export function* watchLoadDataSaga() {
	yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
	yield fork(watchLoadDataSaga)
}