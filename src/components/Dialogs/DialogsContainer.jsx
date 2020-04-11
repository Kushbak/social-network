import React from 'react'
import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../redux/dialogsReducer'; 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class DialogsContainer extends React.Component {  
    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />

        return <Dialogs {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return{
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (messageValue) => {
            dispatch(addMessageActionCreator(messageValue));
        } 
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer) ;
 
 