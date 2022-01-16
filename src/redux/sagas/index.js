import {
	take,
	takeEvery
} from "redux-saga/effects";

export function* workerSaga() {
	console.log('click from saga')
}

export function* watchClickSaga() {
	takeEvery('CLICK', workerSaga);
}

export default function* rootSaga() {
	yield watchClickSaga() 
}