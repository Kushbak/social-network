import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

// css делают модулем чтобы классы были уникальными
// css это ключ, а класс, которую добавили в css это значение, js берет значение таким образом(как на примере внизу) и отбирает уникальный класс
// NavLink - типа <a></a>, с e.preventDeafult и html api. Добавляет в url значение без перезагрузки
// NavLink сам добавляет в активные ссылки active, а  activeClassName меняет ее на собственную, пример ниже

let Navbar = (props) => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users" activeClassName={css.activeLink}>Users</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
            </div>
            {!props.isAuth
                ? <div className={css.item}><NavLink to="/login" activeClassName={css.activeLink}>Login</NavLink></div>
                : null}
        </nav>
    )
}

// если нужно добавить несколько классов, пишем его в кавычки на букве ё

export default Navbar;
