import './App.css';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { Route, withRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense'
import HeaderContainer from './components/Header/HeaderContainer';
import Prelodader from './components/common/Preloader/Preloader';
import Settings from './components/Settings/Settings';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import News from './components/News/News'; 
import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

     componentDidMount() {
          this.props.initializeApp();
     } 

     render() {
          if (!this.props.initialized) {
          return <Prelodader />
          }

          return (
               <div className="app-wrapper">
                    <HeaderContainer />
                    <Navbar isAuth={this.props.isAuth} />
                    <div className="app-wrapper-content">
                         <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                         <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                         <Route path='/users' render={withSuspense(UsersContainer)} />
                         <Route path='/news' render={() => <News />} />
                         <Route path='/music' render={() => <Music />} />
                         <Route path='/settings' render={() => <Settings />} />
                         <Route path='/login' render={() => <Login />} />
                    </div>
               </div>
          )
     }
}

const mapStateToProps = (state) => {
     return {
          initialized: state.app.initialized,
          isAuth: state.auth.isAuth,
     }
}

export default compose(
     withRouter,
     connect(mapStateToProps, { initializeApp })
)(App);
