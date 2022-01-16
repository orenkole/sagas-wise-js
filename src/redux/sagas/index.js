import {
	take,
	takeEvery
} from "redux-saga/effects";

async function getPeople() {
	const request = await fetch('http://swapi.dev/api/people')
	const data = await request.json();
	return data;
}
export function* workerSaga() {
	const data = yield getPeople()
	console.log(data);
}

export function* watchClickSaga() {
	yield takeEvery('CLICK', workerSaga);
}

export default function* rootSaga() {
	yield watchClickSaga() 
}