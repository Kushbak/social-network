import React from 'react';
import p from './Post.module.css';

// props - атрибут для компоненты, при вызывании в jsx задается как аргумент(html), а сохраняется как объект, примеры ниже и в файле MyPosts.jsx
let Post = (props) => {
    return (
        <div className={p.item}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FAlesso_profile.png&f=1&nofb=1" alt="ava" />
            {props.message}
            <div>
                {props.likes}
            </div>
        </div>
    )
}

export default Post;
