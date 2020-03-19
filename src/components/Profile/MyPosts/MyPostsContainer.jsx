import React from 'react';  
import {onChangePostInputValueActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

 
// createRef - создание ссылки к которому нужно обратиться за value, не используя DOM
// задаем ref как ссылку туда и обращаемся с функцией
// при клике на addPost вызывается функция, которая берет значения из textarea, ссылка которой действует с ref
 
const MyPostsContainer = (props) => {  
 
    let state = props.store.getState().profilePage;
    let addPost = () => { 
        props.store.dispatch(addPostActionCreator());
    }

    let onChangeInputValue = (text) =>{  
        props.store.dispatch(onChangePostInputValueActionCreator(text));
    }

    return  <MyPosts addPost={addPost}  onChangeInputValue={onChangeInputValue} state={state}/>
}

export default MyPostsContainer;
