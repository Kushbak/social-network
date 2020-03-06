import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

// route для маршрутизации, или как ссылка меняет контент в блоке 'контент'
// для работы должна быть обернута в тег <BrowserRouter>, указывается путь, и какая компонента должна рисоваться
let App = () => {
     return (
          <BrowserRouter>
               <div className="app-wrapper">  
                    <Header />
                    <Navbar />
                    <div className="app-wrapper-content">
                         <Route path='/profile' component={Profile} />
                         <Route path='/dialogs' component={Dialogs} />  
                         <Route path='/news' component={News} />  
                         <Route path='/music' component={Music} />  
                         <Route path='/settings' component={Settings} />  
                    </div> 
               </div>
          </BrowserRouter>
     )
}

export default App;
