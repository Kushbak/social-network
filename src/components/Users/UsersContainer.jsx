import Users from './Users';
import { unfollow, follow,   toggleIsFollowingProgress, requestUsers, setCurrentPage } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from 'react';
import { getUsers, getPagesSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/usersReselect';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pagesSize)
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pagesSize)
    }

    render() {
        return <Users onChangeCurrentPage={this.onChangeCurrentPage} {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}; 

export default connect(mapStateToProps, 
    {follow, unfollow, setCurrentPage, toggleIsFollowingProgress, requestUsers})(UsersContainer);;



