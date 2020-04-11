import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7036;
        }
        this.props.getUserProfile(userId);
    }

    render() { 
        return <Profile onChangeCurrentPage={this.onChangeCurrentPage} {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}; 

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer); 



