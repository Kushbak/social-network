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
let messagesData = [
    {id:1, message: 'Hi !'},
    {id:1, message: 'How are you!!'},
    {id:1, message: 'Ok'}
] 

const DialogItem = (props) => { 
    let path = "/dialogs/" + props.id
    return(
        <div className={css.dialogItem}> 
                <NavLink to={path} activeClassName={css.active} className={css.dialog}>{props.user}</NavLink> 
        </div>
    );
}

const MessageItem = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}

// map - изменение некоторых элементов массива и присваивание его в другую переменную
// стрелочные функции работают пока не сделают свою функию со всеми даными в массиве, с которыми они работают
// в этом  случае берется данные из массивов и возвращается разметка с этими данными,
// разметка возвращается до тех пор с разными данными пока они не закончатся  
let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} user={d.user}/> );
let messagesElements = messagesData.map( m => <MessageItem id={m.id} message={m.message} /> )




let Dialogs = (props) => {  
    return(
        <div className={css.dialogBlock}> 
            <div className="dialogs">
                 { dialogsElements }
            </div>

            <div className={css.messages}> 
                { messagesElements }
            </div>
        </div>
    );
}


export default Dialogs;