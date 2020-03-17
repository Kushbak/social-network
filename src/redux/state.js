let store = { 
    _rerenderDOM() {
        console.log('State changed');
    },
    _state: { 

        profilePage: {
            postInputValue: '',
            postsData: [
                {id: 1, message:'Hi, how are you?', likes: 34},
                {id: 2, message:'It is my first post', likes: 24},
                {id: 3, message:'It is my second post and I wanna experiment with it', likes: 10},
                {id: 4, message:'Like my post please', likes: 0},
            ] 
        },
        
        dialogsPage: {
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
        } 
        
    },

    subscribe(observer) {
        this._rerenderDOM = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.postInputValue,
                likes: 0 
            };
            
            if(this._state.profilePage.postInputValue == '' || this._state.profilePage.postInputValue == ' '){
                this._state.profilePage.postInputValue = 'Введите хотябы 1 символ';
              
            }  else {
                this._state.profilePage.postsData.push(newPost);   
            } 
            this._state.profilePage.postInputValue = '';
            this._rerenderDOM(this._state);

        } else if(action.type === 'UPDATE-POST-INPUT'){
            this._state.profilePage.postInputValue = action.textareaValue;
            this._rerenderDOM(this._state);

        } else if(action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.messageInputValue
            }; 
        
            this._state.dialogsPage.messagesData.push(newMessage);
            this. _rerenderDOM(this._state);

        } else if(action.type === 'UPDATE-MESSAGE-INPUT'){
            this._state.dialogsPage.messageInputValue = action.textareaValue;
            this._rerenderDOM(this._state);
        }
    },

    addPost() { 
        let newPost = {
            id: 5,
            message: this._state.profilePage.postInputValue,
            likes: 0 
        };
        
        if(this._state.profilePage.postInputValue == '' || this._state.profilePage.postInputValue == ' '){
            this._state.profilePage.postInputValue = 'Введите хотябы 1 символ';
          
        }  else {
            this._state.profilePage.postsData.push(newPost);   
        } 
        this._state.profilePage.postInputValue = '';
        this._rerenderDOM(this._state);
    },

    updatePostInput(textareaValue) {  
        this._state.profilePage.postInputValue = textareaValue;
        this._rerenderDOM(this._state);
    },
    
   addMessage(messageValue) { 
        let newMessage = {
            id: 4,
            message: messageValue
        }; 
    
        this._state.dialogsPage.messagesData.push(newMessage);
        this. _rerenderDOM(this._state);
    },

    updateMessageInput(textareaValue) {  
        this._state.profilePage.messageInputValue = textareaValue;
        this._rerenderDOM(this._state);
    }
 
    
}



export const addPostActionCreator = () => ({ type: 'ADD-POST'});
export const onChangePostInputValueActionCreator = (text) => ({ type: 'UPDATE-POST-INPUT', textareaValue: text }); 
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const onChangeMessageInputValueActionCreator = (text) => ({ type: 'UPDATE-MESSAGE-INPUT', textareaValue: text });

export default store;
