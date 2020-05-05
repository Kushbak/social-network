import React from 'react';
import Description from './Description';
import { connect } from 'react-redux'; 
import { getStatus, updateStatus } from '../../../redux/profileReducer'

class DescriptionContainer extends React.Component { 
    componentDidMount(){
        this.props.getStatus(this.props.userId)
    }
    render() { 
        return <Description {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.auth.profile,
        userId: state.auth.userId,
        status: state.profilePage.status
    }
}; 

export default connect(mapStateToProps, { getStatus, updateStatus })(DescriptionContainer); 



