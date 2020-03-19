export const dialogsReducer = (state, action) => {

    switch(action.type){
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 4,
                message: state.messageInputValue
            }; 
        
            state.messagesData.push(newMessage); 

        case 'UPDATE-MESSAGE-INPUT':
            state.messageInputValue = action.textareaValue; 
        default:
            return state;
    } 

}


export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const onChangeMessageInputValueActionCreator = (text) => ({ type: 'UPDATE-MESSAGE-INPUT', textareaValue: text });
