import React from 'react';
import styles from '../Description.module.css'

class ProfileStatus extends React.Component {
    state = {
        editProfile: false
    }

    activateEditProfile() {
        this.setState({
            editProfile: true
        })
    }

    unactivateEditProfile() {
        this.setState({
            editProfile: false
        })
    }

    render() {

        return (<>
            {
                this.props.status !== null
                    ? <div className={styles.statusBlock}>
                        {this.state.editProfile
                            ? <div><input onBlur={this.unactivateEditProfile.bind(this)} autoFocus type="text" value={this.props.status} /></div>
                            : <div onDoubleClick={this.activateEditProfile.bind(this)}><span>{this.props.status}</span></div>
                        }
                    </div>
                    : <p>*нет статуса*</p>
            }
            
        </>
        )
    }
}

export default ProfileStatus;