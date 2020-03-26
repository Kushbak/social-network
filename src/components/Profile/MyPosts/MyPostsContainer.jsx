import React from 'react';  
import {onChangePostInputValueActionCreator, addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'; 
import { connect } from 'react-redux';
 


const mapStateToProps = (state) => {
    return{
        state: state,
        postInputValue: state.profilePage.postInputValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangeInputValue: (text) => {
            dispatch(onChangePostInputValueActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
