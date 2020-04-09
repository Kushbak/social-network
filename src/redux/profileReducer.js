let initialState = {
    postInputValue: '',
    postsData: [
        {id: 1, message:'Hi, how are you?', likes: 34},
        {id: 2, message:'It is my first post', likes: 24},
        {id: 3, message:'It is my second post and I wanna experiment with it', likes: 10},
        {id: 4, message:'Like my post please', likes: 0},
    ] ,
    profile: null
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-POST':{
            let newPost = {
                id: 5,
                message: action.postsInput,
                likes: 0 
            };
            return{
                ...state,
                postsData: [...state.postsData, newPost],
                postInputValue: ''
            }
        } 
        case 'SET_USER_PROFILE':{
            return{
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    } 

}


export const addPostActionCreator = (postsInput) => ({ type: 'ADD-POST', postsInput});
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile});