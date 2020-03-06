import React from 'react';
import css from './Dialogs.module.css'; 
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


let Dialogs = (props) => {  
    return(
        <div className={css.dialogBlock}> 
            <div className="dialogs">
                <DialogItem id="1" user="User 1"/>
                <DialogItem id="2" user="User 2"/>
                <DialogItem id="3" user="User 3"/>
                <DialogItem id="4" user="User 4"/>
                <DialogItem id="5" user="User 5"/>
            </div>

            <div className={css.messages}>
                <MessageItem message="Hi !" />
                <MessageItem message="How are you!!" />
                <MessageItem message="Ok" />
            </div>
        </div>
    );
}


export default Dialogs;