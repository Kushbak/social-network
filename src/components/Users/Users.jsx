import React from 'react';
import css from './Users.module.css';
import userAvatar from '../../assets/images/user.png'
import Prelodader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => { 
    return (<>
    <Paginator currentPage={props.currentPage} onChangeCurrentPage={props.onChangeCurrentPage} totalUsersCount={props.totalUsersCount} pagesSize={props.pagesSize} />
        {props.isFetching ? <Prelodader /> : null}
        <div> 
            {
                props.users.map(u => <div key={u.id} className={css.block}>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={css.avatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar" />
                        </NavLink>

                        {u.isFollow
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={css.isFollowBtn} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className={css.isUnfollowBtn} onClick={() => { props.follow(u.id) }}>Follow</button>}
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
    </>
    )
}

export default Users;

