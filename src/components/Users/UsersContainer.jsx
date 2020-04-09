import Users from './Users';
import { unfollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, getUsers } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import React from 'react';


class UsersContainer extends React.Component {
    componentDidMount() {
        getUsers(this.props.currentPage, this.props.pagesSize)
    }

    onChangeCurrentPage = (pageNumber) => {
        getUsers(pageNumber, this.props.pagesSize)
    }

    render() {
        return <Users onChangeCurrentPage={this.onChangeCurrentPage} {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}; 

export default connect(mapStateToProps, 
    {follow, unfollow, toggleIsFollowingProgress })(UsersContainer);;



