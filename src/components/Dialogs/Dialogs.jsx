import React from 'react';
import css from './Dialogs.module.css';   
import DialogItem from './DialogItem/DialogItem'; 
import MessageItem from './MessagesItem/MessagesItem';


// map - изменение некоторых элементов массива и присваивание его в другую переменную
// стрелочные функции работают пока не сделают свою функию со всеми даными в массиве, с которыми они работают
// в этом  случае берется данные из массивов и возвращается разметка с этими данными,
// разметка возвращается до тех пор с разными данными пока они не закончатся   

let Dialogs = (props) => {   
    
let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} user={d.user}/> );
let messagesElements = props.state.messagesData.map( m => <MessageItem id={m.id} message={m.message} /> )

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