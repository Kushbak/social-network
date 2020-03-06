import React from 'react';
import css from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


let DialogItem = (props) => { 
    let path = "/dialog/" + props.id
    return(
        <div className={css.dialogItem}> 
                <NavLink to={path} activeClassName={css.active} className={css.dialog}>{props.user}</NavLink> 
        </div>
    );
}


export default DialogItem;