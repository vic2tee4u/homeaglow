import { call, all, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../config/api';
import { LOGIN_URL, USER_DETAILS_URL, CONVERSATION_LIST_URL } from '../../config/url';
import {
    loginSuccess,
    loginFail,
    ILoginPayload,
    getUserDetails,
    getUserDetailsSuccess,
    getUserDetailsFail,
    getRoomMessages,
    getRoomMessagesSuccess,
    getRoomMessagesFail,
} from '../authentication/action';
import { types } from './types';
import { Action } from 'redux';

/** Workers */
function* login(action: any): any {
    const { payload }: { payload: ILoginPayload } = action;
    try {
        const response = yield call(api, LOGIN_URL, 'POST', payload, 2, 2000);
        yield put(loginSuccess(response));
        yield put(getUserDetails());
        yield put(getRoomMessages());
    } catch (error) {
        yield put(loginFail(error));
    }
}

function* getUserDetailsAction(): any {
    try {
        const response = yield call(api, USER_DETAILS_URL, 'GET', {}, 2, 2000);
        yield put(getUserDetailsSuccess(response));
    } catch (error) {
        yield put(getUserDetailsFail(error));
    }
}

function* getRoomList(): any {
    try {
        const response = yield call(api, CONVERSATION_LIST_URL, 'GET', {}, 2, 2000);
        yield put(getRoomMessagesSuccess(response));
    } catch (error) {
        yield put(getRoomMessagesFail(error));
    }
}

/** Watchers */
interface TaskAction extends Action, ILoginPayload {
    payload: any;
}

function* loginWatcher() {
    yield takeLatest<TaskAction>(types.LOGIN, login);
}

function* getUserDetailsWatcher() {
    yield takeLatest(types.GET_USER_DETAILS, getUserDetailsAction);
}

function* getRoomListWatcher() {
    yield takeLatest(types.GET_ROOM_MESSAGES, getRoomList);
}

export default function* authenticationSaga() {
    yield all([loginWatcher(), getUserDetailsWatcher(), getRoomListWatcher()]);
}
