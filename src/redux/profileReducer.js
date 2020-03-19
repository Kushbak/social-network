export const profileReducer = (state, action) => {
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