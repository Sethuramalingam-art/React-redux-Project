import { LOGININFO } from './action.types';
export const fromLogin = (username) => {
    return {
        type: LOGININFO,
        payload: username

    };
};
