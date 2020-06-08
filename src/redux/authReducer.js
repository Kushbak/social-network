import { authApi, captchaApi } from "../api/api";
import { toggleIsFetching } from "./usersReducer";
import { stopSubmit } from "redux-form";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_AUTH_USER_DATA':  
        case 'GET_CAPTCHA_URL': {
            return {
                ...state,
                ...action.payload
            }
        }     
        // case 'SET_USER_PROFILE': {
        //     return {
        //         ...state,
        //         profile: action.profile
        //     }
        // }
        default:
            return state;
    }

};
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: 'GET_CAPTCHA_URL',
    payload: { captchaUrl }
})



export const authUserDataThunk = () => (dispatch) => {
    return authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}
export const login = (email, password, rememberMe) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    authApi.login(email, password, rememberMe, true)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserDataThunk())
                dispatch(toggleIsFetching(false))
            } else{
                if(response.data.resultCode === 10){
                    dispatch(getCaptchaUrl())
                }
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
                dispatch(stopSubmit('login', { _error: message }))
            }
        });
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await captchaApi.getCaptchaUrl()
    const captchaApi = response.data.getCaptchaUrl
    dispatch(getCaptchaUrlSuccess())
}

export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}