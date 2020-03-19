import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._rerenderDOM(this._state);
    }

}


export default store;
