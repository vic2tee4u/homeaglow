const BASE_URL = 'https://homeaglow-staging.herokuapp.com/api/';

export const LOGIN_URL = `${BASE_URL}token`;
export const REFRESH_TOKEN_URL = `${BASE_URL}token/refresh`;
export const USER_DETAILS_URL = `${BASE_URL}userinfo`;
export const CONVERSATION_LIST_URL = `${BASE_URL}api/conversations/cp/`;
/** Takes a customer_id */
export const CONVERSATION_DETAILS_URL = `${BASE_URL}messages/cp/`;