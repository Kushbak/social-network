import React from 'react';  
import Dialogs from './Dialogs'
import DialogItem from './DialogItem/DialogItem'; 
import MessageItem from './MessagesItem/MessagesItem';
import {onChangeMessageInputValueActionCreator, addMessageActionCreator} from '../../redux/dialogsReducer';


// map - изменение некоторых элементов массива и присваивание его в другую переменную
// стрелочные функции работают пока не сделают свою функию со всеми даными в массиве, с которыми они работают
// в этом  случае берется данные из массивов и возвращается разметка с этими данными,
// разметка возвращается до тех пор с разными данными пока они не закончатся   

let DialogsContainer = (props) => {   
     
    let state = props.store.getState().dialogsPage;
     
    let addMessage = () => { 
        props.store.dispatch(addMessageActionCreator());
    }


    let onChangeInputValue = (text) =>{  
        props.store.dispatch(onChangeMessageInputValueActionCreator(text));
    }

    return <Dialogs addMessage={addMessage} onChangeMessageInputValue={onChangeInputValue} state={state}/>
}


export default DialogsContainer;