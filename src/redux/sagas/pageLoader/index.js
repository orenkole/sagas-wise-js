import { apply, call, fork, put, take } from "@redux-saga/core/effects";
import { LOCATION_CHANGE } from "connected-react-router";

function* loadBlogData() {
	const request = yield call(fetch, 'http://swapi.dev/api/vehicles');
	const data = yield apply(request, request.json);
	console.log('blog data', data);
	yield put({type: 'BLOG_LOADED', payload: data})
}

export default function* pageLoaderSaga() {
	while (true) {
		const action = yield take(LOCATION_CHANGE)
		console.log('action', action);
		if(action.payload.location.pathname.endsWith('blog')) {
			yield fork(loadBlogData);
		}
	}
}