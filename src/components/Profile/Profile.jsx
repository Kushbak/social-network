import React from 'react';
import css from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Description from './Description/Description';

const Profile = (props) => { 
    return (
        <div className={css.profile}>
           <Description profile={props.profile} />
           <MyPostsContainer />
        </div>
    )
}

export default Profile;
