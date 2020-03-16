import * as serviceWorker from './serviceWorker';  
import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 
import state, { subscribe } from './redux/state';
import { addPost, updatePostInput, addMessage, updateMessageInput } from './redux/state'; 
import {  BrowserRouter } from 'react-router-dom';


export let rerenderDOM = (state) => {
        ReactDOM.render(
            <BrowserRouter>
                <App 
                        state={state} 
                        addPost={addPost} 
                        updatePostInput={updatePostInput}    
                        addMessage={addMessage}
                        updateMessageInput={updateMessageInput}  /> 
            </BrowserRouter>  , document.getElementById('root'));
            
};   
rerenderDOM(state);

subscribe(rerenderDOM);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
