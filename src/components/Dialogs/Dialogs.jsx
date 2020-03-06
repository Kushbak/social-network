import React from 'react';
import css from './Dialogs.module.css';   
import { NavLink } from 'react-router-dom';

let dialogsData = [
    {id: 1, user: 'user 1'},
    {id: 2, user: 'user 2'},
    {id: 3, user: 'user 3'},
    {id: 4, user: 'user 4'},
    {id: 5, user: 'user 5'}
]; 
const DialogItem = (props) => { 
    let path = "/dialogs/" + props.id
    return(
        <div className={css.dialogItem}> 
                <NavLink to={path} activeClassName={css.active} className={css.dialog}>{props.user}</NavLink> 
        </div>
    );
}


let messagesData = [
    {id:1, message: 'Hi !'},
    {id:1, message: 'How are you!!'},
    {id:1, message: 'Ok'}
] 
const MessageItem = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}



let Dialogs = (props) => {  
    return(
        <div className={css.dialogBlock}> 
            <div className="dialogs">
                <DialogItem id={dialogsData[0].id} user={dialogsData[0].user}/> 
                <DialogItem id={dialogsData[1].id} user={dialogsData[1].user}/> 
                <DialogItem id={dialogsData[2].id} user={dialogsData[2].user}/> 
                <DialogItem id={dialogsData[3].id} user={dialogsData[3].user}/> 
                <DialogItem id={dialogsData[4].id} user={dialogsData[4].user}/>  
            </div>

            <div className={css.messages}>
                <MessageItem id={messagesData[0].id} message={messagesData[0].message} /> 
                <MessageItem id={messagesData[1].id} message={messagesData[1].message} /> 
                <MessageItem id={messagesData[2].id} message={messagesData[2].message} /> 
            </div>
        </div>
    );
}


export default Dialogs;