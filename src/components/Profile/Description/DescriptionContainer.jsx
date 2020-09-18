import React from 'react';
import Description from './Description';
import { connect } from 'react-redux';
import { getStatus, updateStatus, getUserProfile } from '../../../redux/profileReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class DescriptionContainer extends React.Component { 

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Description { ...this.props } hasProfile={ !!this.props.profile } />
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.userId,
        status: state.profilePage.status
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, { getStatus, updateStatus, getUserProfile })
)(DescriptionContainer);



