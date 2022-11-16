import produce from 'immer';
import { parseMessages } from '../../utility';
import { ILoginSuccess } from './action';
import { types } from './types';

interface IInitial {
    token: string;
    refreshToken: string;
    loginError: any;
    logginIn: boolean;
    userDetails: any;
    gettingUserDetails: boolean;
    rooms: Array<any>;
    gettingRooms: boolean;
    selectedRoomMessages: Array<any>;
    fetchingRoomMessages: boolean;
    sendingMessage: boolean;
    /** Will catch any error that is not typed */
    genericErrors: any;
}

const initialState: IInitial = {
    token: '',
    refreshToken: '',
    logginIn: false,
    loginError: null,
    userDetails: null,
    gettingUserDetails: false,
    rooms: [],
    selectedRoomMessages: [],
    gettingRooms: false,
    fetchingRoomMessages: false,
    sendingMessage: false,
    genericErrors: null,
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
        case types.GET_USER_DETAILS:
            return produce(state, draftState => {
                draftState.gettingUserDetails = true;
            });
        case types.GET_USER_DETAILS_SUCCESS:
            return produce(state, draftState => {
                draftState.userDetails = payload;
                draftState.gettingUserDetails = false;
            });
        case types.GET_USER_DETAILS_FAIL:
            return produce(state, draftState => {
                draftState.gettingUserDetails = false;
            });
        case types.GET_ROOM_MESSAGES:
            return produce(state, draftState => {
                draftState.gettingRooms = true;
            });
        case types.GET_ROOM_MESSAGES_SUCCESS:
            return produce(state, draftState => {
                draftState.rooms = payload;
                draftState.gettingRooms = false;
            });
        case types.GET_ROOM_MESSAGES_FAIL:
            return produce(state, draftState => {
                draftState.gettingRooms = false;
                draftState.genericErrors = payload;
            });
        case types.GET_USER_MESSAGES:
            return produce(state, draftState => {
                draftState.fetchingRoomMessages = true;
            });
        case types.GET_USER_MESSAGES_SUCCESS:
            return produce(state, draftState => {
                draftState.selectedRoomMessages = parseMessages(payload);
                draftState.fetchingRoomMessages = false;
            });
        case types.GET_USER_MESSAGES_FAIL:
            return produce(state, draftState => {
                draftState.fetchingRoomMessages = false;
                draftState.genericErrors = payload;
            });
        default:
            return state;
    }
};

export { authentication };
