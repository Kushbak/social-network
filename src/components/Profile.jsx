import React from 'react';
import p from './Profile.module.css';

let Profile = () => {
    return (
        <div className={p.profile}>
            <div>
                <img className={p.banner} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2dVxXUAlb2k%2Fmaxresdefault.jpg&f=1&nofb=1" alt="banner" />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                    <div>
                    New post
                    </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
