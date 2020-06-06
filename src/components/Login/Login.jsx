import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {login, logout} from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='input' type='text' placeholder='Email' name='email' validate={[required]} />
            </div>
            <div>
                <Field component='input' type='password' placeholder='Пароль' name='password'/>
            </div>
            <div>
                <Field component='input' type='checkbox' name='rememberMe'/>Remember me
            </div>
            <div>
                <button>{props.isFetching ? 'Loading...' : 'Login'}</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} isFetching={props.isFetching}/>
        </div>
    )
}

const mapStateToProps = state => ({ 
    isAuth: state.auth.isAuth,
    isFetching: state.usersPage.isFetching
})

export default connect(mapStateToProps, {login, logout})(Login);