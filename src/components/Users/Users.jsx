import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userAvatar from '../../assets/images/user.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id} className={css.block}>
                        <div>
                            <img className={css.avatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar" />
                            {u.isFollow
                                ? <button className={css.isFollowBtn} onClick={() => { this.props.unFollow(u.id) }}>Unfollow</button>
                                : <button className={css.isUnfollowBtn} onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                        <div className={css.descrBlock}>
                            <div className={css.fullName}>{u.name}</div>
                            <div className={css.status}>{u.status}</div>
                            <div className={css.location}>
                                {"u.location.city"},
                            {"u.location.country"}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    };
}

export default Users;

