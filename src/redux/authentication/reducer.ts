import produce from 'immer';
import { ILoginSuccess } from './action';
import { types } from './types';

interface IInitial {
    token: string;
    refreshToken: string;
    loginError: any;
    logginIn: boolean;
    userDetails: any;
}

const initialState: IInitial = {
    token: '',
    refreshToken: '',
    logginIn: false,
    loginError: null,
    userDetails: null,
};

const authentication = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOGIN:
            return produce(state, draftState => {
                draftState.logginIn = true;
                draftState.loginError = null;
            });
        case types.LOGIN_SUCCESS:
            return produce(state, draftState => {
                const { access, rfresh } = payload as ILoginSuccess;
                draftState.token = access;
                draftState.refreshToken = rfresh;
                draftState.loginError = null;
                draftState.logginIn = false;
            });
        case types.LOGIN_FAILED:
            return produce(state, draftState => {
                draftState.loginError = payload;
                draftState.logginIn = false;
            });
        default:
            return state;
    }
};

export { authentication }
