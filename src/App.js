import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {  Route } from 'react-router-dom';
import store from './redux/redux-store';

// route для маршрутизации, или как ссылка меняет контент в блоке 'контент'
// для работы должна быть обернута в тег <BrowserRouter>, указывается путь, и какая компонента должна рисоваться
let App = (props) => {
     return ( 
          <div className="app-wrapper">  
               <Header />
               <Navbar />
               <div className="app-wrapper-content">
                    <Route path='/profile'   render={ () => <Profile store={props.store} /> } />
                    <Route path='/dialogs'  render={ () => <DialogsContainer store={props.store} />  } />  
                    <Route path='/news'     render={ () => <News /> } />  
                    <Route path='/music'    render={ () => <Music /> } />  
                    <Route path='/settings' render={ () => <Settings /> } />  
               </div> 
          </div> 
     )
}

export default App;
