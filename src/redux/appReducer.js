import { authUserDataThunk } from "./authReducer";
import { toggleIsFetching } from "./usersReducer";

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }

};

export const initializedSuccess = () => ({ type: 'INITIALIZED_SUCCESS' });

export const initializeApp = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    let promise = dispatch(authUserDataThunk())
    promise.then(() => {
        dispatch(initializedSuccess())
        dispatch(toggleIsFetching(false));
    });

} 