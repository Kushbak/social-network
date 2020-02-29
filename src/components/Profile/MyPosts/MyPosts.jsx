import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

// задаем значения для их динамического вывода с помощью props 
let MyPosts = (props) => {
    return (
        <div>
            My posts
                <div>
                <textarea cols="20" rows="1"></textarea>
                <button>add post</button>
            </div>
            <div>

                <Post message="Hi, how are you?" likes="34 likes" />
                <Post message="It is my first post" likes="24 likes" />
                <Post message="It is my second post and I wanna experiment with it" likes="10 likes" />
                <Post message="Like my post please" likes="0 likes" />
            </div>
        </div>
    )
}

export default MyPosts;
