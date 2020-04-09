import React from 'react';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='input' type='text' placeholder='Логин' name='login'/>
            </div>
            <div>
                <Field component='input' type='password' placeholder='Пароль' name='password' />
            </div>
            <div>
                <Field component='input' type='checkbox' name='rememberMe'/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) =>{
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;