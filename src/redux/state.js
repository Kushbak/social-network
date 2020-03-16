let rerenderDOM = () => {
    console.log('State changed');
}

let state = { 

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
    
}

export const addPost = (postValue) => { 
    let newPost = {
        id: 5,
        message: postValue,
        likes: 0 
    };

    state.profilePage.postsData.push(newPost);  
    rerenderDOM(state);
};

export const updatePostInput = (textareaValue) => {  
    state.profilePage.postInputValue = textareaValue;
    rerenderDOM(state);
};


export const addMessage = (messageValue) => { 
    let newMessage = {
        id: 4,
        message: messageValue
    };

    state.dialogsPage.messagesData.push(newMessage);
    rerenderDOM(state);
};


export const updateMessageInput = (textareaValue) => {  
    state.profilePage.messageInputValue = textareaValue;
    rerenderDOM(state);
};

export const subscribe = (observer) => {
    rerenderDOM = observer;
}

export default state;
