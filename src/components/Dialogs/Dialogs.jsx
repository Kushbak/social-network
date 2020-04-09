import React from 'react';
import css from './Dialogs.module.css';   
import DialogItem from './DialogItem/DialogItem'; 
import MessageItem from './MessagesItem/MessagesItem';
import {reduxForm, Field} from 'redux-form';



const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={css.sendBlock}>
                <Field component="textarea" name="messageInput" />
                <button>SEND</button>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: 'messageForm'})(DialogsForm);


const Dialogs = (props) => {   
    let state = props.state.dialogsPage;
    let dialogsElements = state.dialogsData.map(d => <DialogItem id={d.id} key={d.id} avatar={d.avatar} user={d.user}/> );
    let messagesElements = state.messagesData.map( m => <MessageItem id={m.id} key={m.id} message={m.message} /> )

    const addNewMessage = (values) => {
        console.log(values.messageInput)
        props.addMessage(values.messageInput);
    } 

    return(
        <div className={css.dialogPage}> 
            <div className={css.dialogsBlock}>
                 { dialogsElements }
            </div>

            <div className={css.messagesBlock}> 
                <div className={css.messageItemsBlock}>
                    { messagesElements } 
                </div>
                <DialogsFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}




export default Dialogs;