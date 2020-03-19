import * as serviceWorker from './serviceWorker';  
import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 
import store from './redux/redux-store'; 
import {  BrowserRouter } from 'react-router-dom';


let rerenderDOM = (state) => {
        ReactDOM.render(
            <BrowserRouter>
                <App 
                        store={store} 
                        dispatch={store.dispatch.bind(store)}  /> 
            </BrowserRouter>  , document.getElementById('root'));
            
};   

rerenderDOM(store.getState());
 
store.subscribe( () => {
    let state = store.getState();
    rerenderDOM(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
