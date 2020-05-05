import React from 'react';
import styles from '../Description.module.css'

class ProfileStatus extends React.Component {
    state = {
        editProfile: false,
        status: this.props.status
    }

    activateEditProfile = () => {
        this.setState({
            editProfile: true
        })
    }

    unactivateEditProfile() {
        this.setState({
            editProfile: false
        })
        this.props.updateStatus(this.state.status);
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div className={styles.statusBlock}>
                {this.state.editProfile
                    ? <div>
                        <input onBlur={this.unactivateEditProfile.bind(this)} autoFocus type="text" value={this.state.status} onChange={this.onChangeStatus} />
                    </div>
                    : <div onDoubleClick={this.activateEditProfile.bind(this)}>
                        <span>{this.state.status || '*нет статуса*'}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;