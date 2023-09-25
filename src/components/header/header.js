import "./header.css"
import menuLogo from "./menu.png"
import  title from "./logo_title.png"
import {Menu} from "../menu/menu";
import {useState} from "react";

export function Header(){

    let [menuState, setMenuState] = useState(false);

    function toggleMenu(){
        setMenuState(!menuState);
    }

    return (
        <>
            {menuState ? <Menu menuToggle = {toggleMenu}/> : null}
            <div className="header">
                <img src={menuLogo} className="header__menu" onClick={toggleMenu}/>
                <img src={title} className="header__title"/>
            </div>
        </>
    );
}