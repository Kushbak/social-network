import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authUserDataThunk } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUserDataThunk();
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
} 

export default connect(mapStateToProps, {authUserDataThunk})(HeaderContainer);