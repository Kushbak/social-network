import { addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts'; 
import { connect } from 'react-redux';
 


const mapStateToProps = (state) => {
    return{
        state: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (postsInput) => {
            dispatch(addPostActionCreator(postsInput));
        } 
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
