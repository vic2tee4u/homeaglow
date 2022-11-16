import { createAction } from 'redux-act';
import { types } from './types';

export interface ILoginPayload {
    username: string;
    password: string;
}

export interface ILoginSuccess {
    access: string;
    rfresh: string;
}

export const login = createAction<ILoginPayload>(types.LOGIN);
export const loginSuccess = createAction<ILoginSuccess>(types.LOGIN_SUCCESS);
export const loginFail = createAction<any>(types.LOGIN_FAILED);
