import { usersApi, authApi } from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    switch(action.type){ 
        case 'SET_AUTH_USER_DATA':{
            return {
                ...state,
                ...action.data,
                isAuth: true
            } 
        }
        default:
            return state;
    } 

};


export const setAuthUserData = (userId, email, login) => ({ type: 'SET_AUTH_USER_DATA', data: {userId, email, login} });


export const authUserDataThunk = () => (dispatch) => {
    authApi.me()
    .then(response => { 
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login));
        }
    });
}
