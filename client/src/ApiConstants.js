import BASE_URL from './ApiConfig';

export const GET_MENU = `${BASE_URL}menu`;
export const GET_ALL_USERS_INFO = `${BASE_URL}user_info`;
export const GET_USER_INFO = uid => `${BASE_URL}user_info/${uid}`;
