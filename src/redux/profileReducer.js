let initialState = {
    postInputValue: '',
    postsData: [
        {id: 1, message:'Hi, how are you?', likes: 34},
        {id: 2, message:'It is my first post', likes: 24},
        {id: 3, message:'It is my second post and I wanna experiment with it', likes: 10},
        {id: 4, message:'Like my post please', likes: 0},
    ] 
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.postInputValue,
                likes: 0 
            };
            
            if(state.postInputValue == '' || state.postInputValue == ' '){
                state.postInputValue = 'Введите хотябы 1 символ';
              
            }  else {
                state.postsData.push(newPost);   
            } 
            state.postInputValue = ''; 
            return state;

        case 'UPDATE-POST-INPUT':
            state.postInputValue = action.textareaValue; 
        default:
            return state;
    } 

}


export const addPostActionCreator = () => ({ type: 'ADD-POST'});
export const onChangePostInputValueActionCreator = (text) => ({ type: 'UPDATE-POST-INPUT', textareaValue: text }); 