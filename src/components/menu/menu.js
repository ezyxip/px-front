import "./menu.css"
import {useEffect} from "react";
import {isAuth, getCredentials} from "../../api/auth";
import {Link} from "react-router-dom";
import {
    common_menu_section,
    admin_menu_section, manager_menu_section, master_menu_section
} from "../../api/menu-points";


export function Menu({menuToggle}){

    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById("menu").className += " menu--show";
        }, 10);
    })

    let username;
    if(isAuth()){
        username = <span className="menu__content__username">{getCredentials().name}</span>
    } else {
        username = <span className="menu__content__username">Вы не вошли в систему</span>
    }

    let adminSection;
    let managerSection;
    let masterSection;
    let commonSection;

    if(getCredentials().roles.some(x=>x==="admin")){
        adminSection =
            <div className="menu__content__section">
                <span className="menu__section__title">{admin_menu_section.title}</span>
                {admin_menu_section.content.map(y=><Link to={y.href}>{y.name}</Link>)}
            </div>;
    }

    if(getCredentials().roles.some(x=>x==="manager")){
        managerSection =
            <div className="menu__content__section">
                <span className="menu__section__title">{manager_menu_section.title}</span>
                {manager_menu_section.content.map(y=><Link to={y.href}>{y.name}</Link>)}
            </div>;
    }

    if(getCredentials().roles.some(x=>x==="master")){
        masterSection =
            <div className="menu__content__section">
                <span className="menu__section__title">{master_menu_section.title}</span>
                {master_menu_section.content.map(y=><Link to={y.href}>{y.name}</Link>)}
            </div>;
    }

    commonSection =
        <div className="menu__content__section">
            <span className="menu__section__title">{common_menu_section.title}</span>
            {common_menu_section.content.map(y=><Link to={y.href}>{y.name}</Link>)}
        </div>;

    return(
        <div className="menu" id = "menu">
            <div className="menu__dark-area" onClick={()=>{
                document.getElementById("menu").className = "menu"
                setTimeout(()=>{menuToggle();}, 200)}}></div>

            <div className="menu__content">
                {username}
                {adminSection}
                {managerSection}
                {masterSection}
                {commonSection}
            </div>
        </div>
    )
}