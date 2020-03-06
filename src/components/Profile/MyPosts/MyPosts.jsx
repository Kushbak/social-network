import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

//  BLL/UI

let postsData = [
    {id: 1, message:'Hi, how are you?', likes: 34},
    {id: 1, message:'It is my first post', likes: 24},
    {id: 1, message:'It is my second post and I wanna experiment with it', likes: 10},
    {id: 1, message:'Like my post please', likes: 0},
]

let postsElements = postsData.map( p => <Post id={p.id} message={p.message} likes={p.likes + ' likes'} /> );


// задаем значения для их динамического вывода с помощью props 
const MyPosts = (props) => {
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
