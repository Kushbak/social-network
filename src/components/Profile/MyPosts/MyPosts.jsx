import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
 
// createRef - создание ссылки к которому нужно обратиться за value, не используя DOM
// задаем ref как ссылку туда и обращаемся с функцией
// при клике на addPost вызывается функция, которая берет значения из textarea, ссылка которой действует с ref
 
const MyPosts = (props) => {
    let postsElements = props.postsData.map( p => <Post id={p.id} message={p.message} likes={p.likes} /> );

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value; 

        alert(text);
    }

    return (
        
        <div className={css.postsWrapper}>
            <h3>My posts</h3>
            <div className={css.addPost}>
                <div> 
                    <textarea ref={newPostElement} cols="20" rows="1.5"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button> 
                </div>
            </div>
            <div className={css.postsBlock}> 
                 { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
