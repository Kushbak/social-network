import { authApi } from "../api/api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_AUTH_USER_DATA': {
            return {
                ...state,
                ...action.payload
            }
        }        
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }

};
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: 'SET_AUTH_USER_DATA',
    payload: { userId, email, login, isAuth }
});



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
    authApi.login(email, password, rememberMe, true)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserDataThunk())
            }
        });
}
export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}