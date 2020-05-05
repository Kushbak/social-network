import React from 'react';
import styles from './Description.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultAva from '../../../assets/images/avatar.jpg'
import ProfileStatus from './ProfileStatus/ProfileStatus';
const Description = (props) => {
    debugger
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.descrWrapper}>
            <div className={styles.avatar}>
                <img src={
                    props.profile.photos.large !== null ? props.profile.photos.large : defaultAva} alt="avatar" /> 
            </div>
            <div className={styles.aboutMe}>
                <p className={styles.userName}>{props.profile.fullName}</p>
                <ProfileStatus status={props.profile.lookingForAJobDescription} status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default Description;