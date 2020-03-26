let initialState = {
    users: [
        // {id: 1, avatarURL: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.akamai.steamstatic.com%2Fsteamcommunity%2Fpublic%2Fimages%2Favatars%2Fdc%2Fdc1574232f8aaac87fd86575ccb94c06ff35cebc_full.jpg&f=1&nofb=1', 
        // isFollow: true, fullName: 'User Name1', about: 'some words about me', location:{city: 'Osh', country: 'Kyrgyzstan'} },
        // {id: 2, avatarURL: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.akamai.steamstatic.com%2Fsteamcommunity%2Fpublic%2Fimages%2Favatars%2Fdc%2Fdc1574232f8aaac87fd86575ccb94c06ff35cebc_full.jpg&f=1&nofb=1', 
        // isFollow: true, fullName: 'User Name2', about: 'some words about me', location:{city: 'Osh', country: 'Kyrgyzstan'} },
        // {id: 3, avatarURL: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.akamai.steamstatic.com%2Fsteamcommunity%2Fpublic%2Fimages%2Favatars%2Fdc%2Fdc1574232f8aaac87fd86575ccb94c06ff35cebc_full.jpg&f=1&nofb=1', 
        // isFollow: true, fullName: 'User Name3', about: 'some words about me', location:{city: 'Osh', country: 'Kyrgyzstan'} }
    ] 
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
            return { ...state, users: [ ...state.users, ...action.users] }
        }

        default:
            return state;
    } 

}


export const FollowAC = (userID) => ({ type: 'FOLLOW', userID});
export const UnfollowAC = (userID) => ({ type: 'UNFOLLOW', userID }); 
export const setUsersAC = (users) => ({ type: 'SET-USERS', users   }); 