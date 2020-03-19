let initialState = {
    messageInputValue: '',
    dialogsData: [
        {id: 1, user: 'user 1', avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs70%2Fi%2F2010%2F246%2F0%2F3%2Fsteam_avatar_pack_by_radioactivenemofish-d2xx5mm.jpg&f=1&nofb=1'},
        {id: 2, user: 'user 2', avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs70%2Fi%2F2010%2F246%2F0%2F3%2Fsteam_avatar_pack_by_radioactivenemofish-d2xx5mm.jpg&f=1&nofb=1'},
        {id: 3, user: 'user 3', avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs70%2Fi%2F2010%2F246%2F0%2F3%2Fsteam_avatar_pack_by_radioactivenemofish-d2xx5mm.jpg&f=1&nofb=1'},
        {id: 4, user: 'user 4', avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs70%2Fi%2F2010%2F246%2F0%2F3%2Fsteam_avatar_pack_by_radioactivenemofish-d2xx5mm.jpg&f=1&nofb=1'},
        {id: 5, user: 'user 5', avatar: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc07.deviantart.net%2Ffs70%2Fi%2F2010%2F246%2F0%2F3%2Fsteam_avatar_pack_by_radioactivenemofish-d2xx5mm.jpg&f=1&nofb=1'}
    ],
    
    messagesData: [
        {id:1, message: 'Hi !'},
        {id:2, message: 'How are you!!'},
        {id:3, message: 'Ok'}
    ] 
};

export const dialogsReducer = (state = initialState, action) => {

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

};


export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const onChangeMessageInputValueActionCreator = (text) => ({ type: 'UPDATE-MESSAGE-INPUT', textareaValue: text });
