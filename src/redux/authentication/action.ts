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

export interface IGetRoomDetails {
    /**Id of customer */
    id: number;
}

export type Source = 'customer' | 'cp';

export interface IMessage {
    id: number;
    sourceEnum: Source;
    recipientEnum: Source;
    channel: string;
    message: string;
    customerID: number;
    cleanerID: number;
    messageDateTime: number;
}

export const login = createAction<ILoginPayload>(types.LOGIN);
export const loginSuccess = createAction<ILoginSuccess>(types.LOGIN_SUCCESS);
export const loginFail = createAction<any>(types.LOGIN_FAILED);

export const getUserDetails = createAction(types.GET_USER_DETAILS);
export const getUserDetailsSuccess = createAction<any>(types.GET_USER_DETAILS_SUCCESS);
export const getUserDetailsFail = createAction<any>(types.GET_USER_DETAILS_FAIL);

export const getRoomMessages = createAction(types.GET_ROOM_MESSAGES);
export const getRoomMessagesSuccess = createAction<any>(types.GET_ROOM_MESSAGES_SUCCESS);
export const getRoomMessagesFail = createAction<any>(types.GET_ROOM_MESSAGES_FAIL);

export const getUserMessages = createAction<IGetRoomDetails>(types.GET_USER_MESSAGES);
export const getUserMessagesSuccess = createAction<Array<IMessage>>(types.GET_USER_MESSAGES_SUCCESS);
export const getUserMessagesFail = createAction<any>(types.GET_USER_MESSAGES_FAIL);
