import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

// задаем значения для их динамического вывода с помощью props 
let MyPosts = (props) => {
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
                <Post message="Hi, how are you?" likes="34 likes" />
                <Post message="It is my first post" likes="24 likes" />
                <Post message="It is my second post and I wanna experiment with it" likes="10 likes" />
                <Post message="Like my post please" likes="0 likes" />
            </div>
        </div>
    )
}

export default MyPosts;
