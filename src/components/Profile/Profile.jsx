import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import DescriptionContainer from './Description/DescriptionContainer';

const Profile = (props) => { 
    return (
        <div className={css.profile}>
           <DescriptionContainer />
           <MyPostsContainer />
        </div>
    )
}

export default Profile;
