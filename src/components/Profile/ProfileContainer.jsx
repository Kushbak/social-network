import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, updateStatus, getUserProfile } from '../../redux/profileReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {  
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        debugger
        this.refreshProfile();
    }

    render() {
        return <Profile { ...this.props } hasProfile={ !!this.props.profile } />
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        myId: state.auth.userId,
        isFetching: state.usersPage.isFetching,
        status: state.profilePage.status
    }
};

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, { getStatus, updateStatus, getUserProfile })
)(ProfileContainer);



