import React from 'react';
import css from './Description.module.css';
import Preloader from '../../common/Preloader/Preloader';
import defaultAva from '../../../assets/images/avatar.jpg'
const Description = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={css.descrWrapper}>
            <div className={css.descrBlock}>
                <div className={css.avatar}>
                    <img src={
                        props.profile.photos.large !== null ? props.profile.photos.large : defaultAva} alt="avatar" /> 
                </div>
                <div><p>{props.profile.fullName}</p></div>
            </div>
        </div>
    );
}

export default Description;