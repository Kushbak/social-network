import Users from './Users';
import { unfollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            });
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            pagesSize={this.props.pagesSize}
            onChangeCurrentPage={this.onChangeCurrentPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetching={this.props.isFetching}
        />
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(follow(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unfollow(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCount(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }
//     }
// };

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);;



