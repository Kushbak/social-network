import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter, Redirect } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7036;
        }
        this.props.getUserProfile(userId);
    }
    
    

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />

        return <Profile onChangeCurrentPage={this.onChangeCurrentPage} {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}; 

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);;



