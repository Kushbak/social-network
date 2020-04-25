import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Prelodader from './components/common/Preloader/Preloader';
 
class App extends React.Component {

     componentDidMount(){
          this.props.initializeApp();
     }

     render() {
          if(!this.props.initialized) {
               return <Prelodader />
          }

          return (
               <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar />
                    <div className="app-wrapper-content">
                         <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                         <Route path='/dialogs' render={() => <DialogsContainer />} />
                         <Route path='/users' render={() => <UsersContainer />} />
                         <Route path='/news' render={() => <News />} />
                         <Route path='/music' render={() => <Music />} />
                         <Route path='/settings' render={() => <Settings />} />
                         <Route path='/login' render={() => <Login />} />
                    </div>
               </div>
          )
     }
}

const mapStateToProps = (state) => ({
     initialized: state.app.initialized
})

export default compose(
     withRouter,
     connect(mapStateToProps, {initializeApp})
)(App);
