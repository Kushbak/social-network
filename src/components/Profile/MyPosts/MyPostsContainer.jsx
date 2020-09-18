import { addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'; 
import { connect } from 'react-redux';
import React from 'react';
 
class MyPostsContainer extends React.Component{
    render() {
        return <MyPosts { ...this.props } />
    }
}

const mapStateToProps = (state) => {
    return{
        state: state
    }
}; 

export default connect(mapStateToProps, { addPostActionCreator })(MyPostsContainer);;
