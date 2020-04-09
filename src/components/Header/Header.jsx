import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <img className={styles.logo} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-xRqe8bLNdkI%2FUWko99o1qGI%2FAAAAAAAADPg%2Fse7eP_ss_Eo%2Fs640%2FBoston_Bruins_logo.gif&f=1&nofb=1" alt="logo" />
            <div className={styles.loginBlock}>
                {props.isAuth 
                    ? props.login
                    :<NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;