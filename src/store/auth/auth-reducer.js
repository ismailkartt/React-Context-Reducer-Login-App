import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL } from "../types";
import { authInitialState } from "./auth-initial-state";


export const authReducer = (state = authInitialState, action) => {
    if(action.type === LOGIN_SUCCESS){
        return {...state, isUserLogin: true, user: action.payload}
    }else if(action.type === LOGIN_FAIL){
        return {...state, isUserLogin: false, user: {}}
    }else if(action.type === LOGOUT){
        return {...state, isUserLogin: false, user: {}}
    }

        return state;
    

} 

