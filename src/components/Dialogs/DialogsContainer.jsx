import Dialogs from './Dialogs'
import {onChangeMessageInputValueActionCreator, addMessageActionCreator} from '../../redux/dialogsReducer'; 
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return{
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChangeMessageInputValue: (text) => {
            dispatch(onChangeMessageInputValueActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;