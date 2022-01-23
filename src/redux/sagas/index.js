import {all, call, spawn} from "redux-saga/effects";
import { loadBasicData } from "./initialSagas";

export default function* rootSaga() {
	const sagas = [loadBasicData];

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