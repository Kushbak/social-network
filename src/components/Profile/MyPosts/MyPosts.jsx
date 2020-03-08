import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

//  BLL/UI




 
const MyPosts = (props) => {
    let postsElements = props.postsData.map( p => <Post id={p.id} message={p.message} likes={p.likes + ' likes'} /> );


    return (
        <div className={css.postsWrapper}>
            <h3>My posts</h3>
            <div className={css.addPost}>
                <div> 
                    <textarea cols="20" rows="1.5"></textarea>
                </div>
                <div>
                    <button>add post</button> 
                </div>
            </div>
            <div className={css.postsBlock}> 
                 { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
