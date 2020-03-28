let initialState = {
    users: [],
    pagesSize: 5,
    totalUsersCount: 0,
    currentPage: 1 ,
    isFetching: true
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return { ...u, isFollow: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return { ...u, isFollow: false}
                    }
                    return u;
            })
        }
        case 'SET-USERS':{
            return {  ...state, users: action.users }
        }

        case 'SET-CURRENT-PAGE':{
            return { ...state, currentPage: action.currentPage }
        }

        case 'SET-TOTAL-USERS-COUNT':{
            return { ...state, totalUsersCount: action.count }
        }

        case 'SET_IS_FETCHING':{
            return { ...state, isFetching: action.isFetching }
        }

        default:
            return state;
    } 

}


export const follow = (userID) => ({ type: 'FOLLOW', userID});
export const unfollow = (userID) => ({ type: 'UNFOLLOW', userID }); 
export const setUsers = (users) => ({ type: 'SET-USERS', users   }); 
export const setCurrentPage = (page) => ({ type: 'SET-CURRENT-PAGE', currentPage: page  }); 
export const setTotalUsersCount = (totalUsersCount) => ({ type: 'SET-TOTAL-USERS-COUNT', count: totalUsersCount  }); 
export const toggleIsFetching = (isFetching) => ({ type: 'SET_IS_FETCHING', isFetching  }); 
