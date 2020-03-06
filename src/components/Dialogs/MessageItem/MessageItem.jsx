import React from 'react';
import css from './MessageItem.module.css'; 

const MessageItem = (props) => {
    return (
        <div className={css.message}>
            {props.message}
        </div>
    )
}



export default MessageItem;