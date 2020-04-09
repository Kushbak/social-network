import React from 'react';
import css from './Users.module.css';
import userAvatar from '../../assets/images/user.png'
import Prelodader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<>
        {props.isFetching ? <Prelodader /> : null}
        <div>
            <div className={css.forChangingPages}>
                {
                    pages.map(p => {
                        return <button onClick={(e) => { props.onChangeCurrentPage(p) }} className={props.currentPage === p && css.selectedPage}> {p} </button>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id} className={css.block}>

                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={css.avatar} src={u.photos.small != null ? u.photos.small : userAvatar} alt="avatar" />
                        </NavLink>

                        {u.isFollow
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={css.isFollowBtn} onClick={() => { 
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "729e5af1-8801-4361-bfc9-77d08357072e"
                                    }
                                }).then(response => {
                                    if(response.data.resultCode == 0){
                                        props.unfollow(u.id) ;
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                });
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} className={css.isUnfollowBtn} onClick={() => {
                                props.toggleIsFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "729e5af1-8801-4361-bfc9-77d08357072e"
                                    }
                                }).then(response => {
                                    if(response.data.resultCode == 0){
                                        props.follow(u.id) 
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);

                                })
                                }}>Follow</button>}
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

