import React from 'react';
import css from './Post.module.css';

// props - атрибут для компоненты, при вызывании в jsx задается как аргумент(html), а сохраняется как объект, примеры ниже и в файле MyPosts.jsx
const Post = (props) => {
    let likePath = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F56%2FEi-like.svg%2F768px-Ei-like.svg.png&f=1&nofb=1';

    return (
        <div className={ css.item } >
            <img className={ css.avatar } src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FAlesso_profile.png&f=1&nofb=1" alt="ava" />
            <div className={ css.message } >{ props.message }</div>
            <div className={ css.likes } >
                <img src={ likePath } alt="likes" /> <span>{ props.likes }</span>
            </div>
        </div>
    )
}

export default Post;
