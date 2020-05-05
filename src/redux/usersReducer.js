import { usersApi } from '../api/api';

let initialState = {
    users: [],
    pagesSize: 12,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [

    ]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, isFollow: true }
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, isFollow: false }
                    }
                    return u;
                })
            }
        case 'SET-USERS': {
            return { ...state, users: action.users }
        }

        case 'SET-CURRENT-PAGE': {
            return { ...state, currentPage: action.currentPage }
        }

        case 'SET-TOTAL-USERS-COUNT': {
            return { ...state, totalUsersCount: action.count }
        }

        case 'SET_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching }
        }
        case 'SET_IS_FOLLOWING_IN_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }

}


export const followSuccess = (userID) => ({ type: 'FOLLOW', userID });
export const unfollowSuccess = (userID) => ({ type: 'UNFOLLOW', userID });
export const setUsers = (users) => ({ type: 'SET-USERS', users });
export const setCurrentPage = (page) => ({ type: 'SET-CURRENT-PAGE', currentPage: page });
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: 'SET_IS_FETCHING', isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: 'SET_IS_FOLLOWING_IN_PROGRESS', isFetching, userId });


export const requestUsers = (currentPage, pagesSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersApi.requestUsers(currentPage, pagesSize)
        .then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setUsers(data.items));
            dispatch(toggleIsFetching(false));
        }); 
};
export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersApi.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
};
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    usersApi.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        })
};