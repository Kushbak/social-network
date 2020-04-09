import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';  
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

// route для маршрутизации, или как ссылка меняет контент в блоке 'контент'
// для работы должна быть обернута в тег <BrowserRouter>, указывается путь, и какая компонента должна рисоваться
const App = (props) => {
     return ( 
          <div className="app-wrapper">  
               <HeaderContainer />
               <Navbar />
               <div className="app-wrapper-content">
                    <Route path='/profile/:userId?'  render={ () => <ProfileContainer /> } />
                    <Route path='/dialogs'  render={ () => <DialogsContainer />  } />  
                    <Route path='/users'    render={ () => <UsersContainer />  } />  
                    <Route path='/news'     render={ () => <News /> } />  
                    <Route path='/music'    render={ () => <Music /> } />  
                    <Route path='/settings' render={ () => <Settings /> } />  
                    <Route path='/login'    render={ () => <Login /> } />  
               </div> 
          </div> 
     )
}

export default App;
