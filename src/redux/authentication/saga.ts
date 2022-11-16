import { call, all, put, takeLatest } from 'redux-saga/effects';
import { api } from '../../config/api';
import { LOGIN_URL } from '../../config/url';
import { loginSuccess, loginFail, ILoginPayload } from '../authentication/action';
import { types } from './types';
import { Action } from 'redux';

/** Workers */
function* login(action: any): any {
    const { payload }: { payload: ILoginPayload } = action;
    try {
        const response = yield call(api, LOGIN_URL, 'POST', payload, 2, 2000);
        yield put(loginSuccess(response));
    } catch (error) {
        yield put(loginFail(error));
    }
}

/** Watchers */

interface TaskAction extends Action, ILoginPayload {
    payload: any;
}

function* loginWatcher() {
    yield takeLatest<TaskAction>(types.LOGIN, login);
}

export default function* authenticationSaga() {
    yield all([loginWatcher()]);
}
