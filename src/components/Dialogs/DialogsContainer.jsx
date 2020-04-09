import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../redux/dialogsReducer'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class DialogsContainer extends React.Component {  
    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />

        return <Dialogs {...this.props} />
    };
}


const mapStateToProps = (state) => {
    return{
        state: state,
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (messageValue) => {
            dispatch(addMessageActionCreator(messageValue));
        } 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
 