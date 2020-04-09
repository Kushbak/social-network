import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';


const myPostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="postsinput" />
            <button>add post</button>
        </form>
    )
} 

const PostsFormRedux = reduxForm({form: 'postsForm'})(myPostsForm);
 
const MyPosts = (props) => { 

    let state = props.state.profilePage;
    let postsElements = state.postsData.map( p => <Post id={p.id} key={p.id} message={p.message} likes={p.likes} /> );

    let addPost = (values) => { 
        props.addPost(values.postsinput);
    } 

    return (
        <div className={css.postsWrapper}>
            <div className={css.addPost}>
                <PostsFormRedux onSubmit={addPost} />
            </div>
            <div className={css.postsBlock}> 
                 { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
