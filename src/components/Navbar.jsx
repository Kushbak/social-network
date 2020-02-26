import React from 'react';
import n from './Navbar.module.css';
// css делают модулем чтобы классы были уникальными
// n это ключ, а класс, которую добавили в css это значение, js берет значение таким образом(как на примере внизу) и отбирает уникальный класс

let Navbar = () => {
    return (
        <nav className={n.nav}>
            <div><a className={`${n.item} ${n.active}`} href="#">Profile</a></div> 
            <div><a className={n.item} href="#">Messages</a></div>
            <div><a className={n.item} href="#">News</a></div>
            <div><a className={n.item} href="#">Music</a></div>
            <div><a className={n.item} href="#">Settings</a></div>
        </nav>
    )
}

 // если нужно добавить несколько классов, пишем его в кавычки на букве ё

export default Navbar;
