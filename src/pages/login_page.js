import {Header} from "../components/header/header";
import "./login-page.css"
import {Button} from "../components/button/button";
import {auth, isAuth, logout} from "../api/auth";
import {useNavigate} from "react-router-dom";
import {common_menu_section} from "../api/menu-points";

//Дописать верификацию формы
function verifyCredentials(){
    return auth(document.forms.login_form.login.value, document.forms.login_form.password.value)
}

export function LoginPage(){
    const nav = useNavigate();
    if(isAuth()){
        logout();
        nav("/app/");
        common_menu_section.content[0].name = "Авторизация"
    }
    return(
        <>
            <Header/>
            <form name = "login_form" className="login-form" onSubmit={(e)=>{
                e.preventDefault();
                if(verifyCredentials()){
                    common_menu_section.content[0].name = "Выход"
                    nav("/app/");
                } else {
                    document.getElementById("error-label").hidden = false;
                    document.getElementById("error-label").classList.toggle("login-form__error-label--animation")
                    setTimeout(()=>{document.getElementById("error-label").classList.toggle("login-form__error-label--animation");}, 1)
                }
            }}>
                <span className="login-form__title">Авторизация</span>
                <div className="login-form-section">
                    <span className="login-form__label">Логин</span>
                    <input name="login" className="login-from__input"/>
                </div>
                <div className="login-form-section">
                    <span className="login-form__label">Пароль</span>
                    <input name="password" type="password" className="login-from__input"/>
                </div>
                <Button type = "submit">Вход</Button>
                <Button style="secondary">Забыли пароль?</Button>
                <span hidden className="login-form__error-label login-form__error-label--animation" id = "error-label">Неверный логин или пароль</span>
            </form>
        </>
    )
}