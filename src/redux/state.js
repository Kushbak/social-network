let state = { 

    profilePage: {
        postsData: [
            {id: 1, message:'Hi, how are you?', likes: 34},
            {id: 2, message:'It is my first post', likes: 24},
            {id: 3, message:'It is my second post and I wanna experiment with it', likes: 10},
            {id: 4, message:'Like my post please', likes: 0},
        ] 
    },
    
    dialogsPage: {
        dialogsData: [
            {id: 1, user: 'user 1'},
            {id: 2, user: 'user 2'},
            {id: 3, user: 'user 3'},
            {id: 4, user: 'user 4'},
            {id: 5, user: 'user 5'}
        ],
        
        messagesData: [
            {id:1, message: 'Hi !'},
            {id:2, message: 'How are you!!'},
            {id:3, message: 'Ok'}
        ] 
    } 
    
}

export default state;
