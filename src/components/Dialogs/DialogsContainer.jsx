import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../redux/dialogsReducer'; 
import { connect } from 'react-redux';



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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;