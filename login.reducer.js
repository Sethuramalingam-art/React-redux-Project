import { LOGININFO } from './action.types';
const INITIAL_STATE = {
        username: '',
};
const reducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case 'LoginInfo':
               return {
                 ...state, username: action.payload,
               };        
            default: return state;
        }
    };
export default reducer;
