import React from 'react';
import css from './Description.module.css'
const Description = () =>{
    return(
        <div className={css.descrWrapper}>
             <div className={css.bannerBlcok}>
                <img className={css.banner} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2dVxXUAlb2k%2Fmaxresdefault.jpg&f=1&nofb=1" alt="banner" />
            </div>
            <div className={css.descrBlock}>
                ava + description
            </div>
        </div>
    );
}

export default Description;