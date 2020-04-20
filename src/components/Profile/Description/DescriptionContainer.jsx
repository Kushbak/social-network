import React from 'react';
import Description from './Description';
import { connect } from 'react-redux'; 


class DescriptionContainer extends React.Component { 
    render() { 
        return <Description {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        profile: state.auth.profile
    }
}; 

export default connect(mapStateToProps, { })(DescriptionContainer); 



