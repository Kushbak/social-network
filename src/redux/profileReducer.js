import { usersApi } from "../api/api";
import { toggleIsFetching } from "./usersReducer";

let initialState = {
    postInputValue: '',
    postsData: [
        { id: 1, message: 'Hi, how are you?', likes: 34 },
        { id: 2, message: 'It is my first post', likes: 24 },
        { id: 3, message: 'It is my second post and I wanna experiment with it', likes: 10 },
        { id: 4, message: 'Like my post please', likes: 0 },
    ],
    profile: {},
    status: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.postsInput,
                likes: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postInputValue: ''
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}


export const addPostActionCreator = (postsInput) => ({ type: 'ADD-POST', postsInput });
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile });
export const setStatusSuccess = (status) => ({ type: 'SET_STATUS', status });


export const getUserProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersApi.getUser(userId)
        .then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUserProfile(response.data))
        });
}


export const getStatus = (userId) => (dispatch) => {
    usersApi.getUserStatus(userId)
        .then(response => {
            dispatch(setStatusSuccess(response.data))
        });
}

export const updateStatus = (status) => (dispatch) => {
    usersApi.updateStatus(status)
}

