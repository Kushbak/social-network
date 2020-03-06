import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Description from './Description/Description';

const Profile = () => {
    return (
        <div className={css.profile}>
           <Description />
           <MyPosts />
        </div>
    )
}

export default Profile;
