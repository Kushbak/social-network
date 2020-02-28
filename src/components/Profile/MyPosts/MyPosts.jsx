import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = () => {
    return ( 
            <div>
                My posts 
                <div>
                    <textarea cols="20" rows="1"></textarea>
                    <button>add post</button>
                </div>
                <div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div> 
    )
}

export default MyPosts;
