import {all, call, spawn} from "redux-saga/effects";

export function* saga1() {
	console.log('Saga 1')
}
export function* saga2() {
	console.log('Saga 2')
}
export function* saga3() {
	console.log('Saga 3')
}

export default function* rootSaga() {
	const sagas = [saga1, saga2, saga2];

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