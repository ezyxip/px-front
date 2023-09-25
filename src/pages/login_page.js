import {Header} from "../components/header/header";
import "./login-page.css"
import {Button} from "../components/button/button";
import {auth} from "../api/auth";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

//Дописать верификацию формы
function verifyCredentials(){
    return auth(document.forms.login_form.login.value, document.forms.login_form.password.value)
}

export function LoginPage(){
    const nav = useNavigate();
    return(
        <>
            <Header/>
            <form name = "login_form" className="login-form" onSubmit={(e)=>{
                e.preventDefault();
                if(verifyCredentials()){
                    nav("/app/");
                } else {

                }
            }}>
                <span className="login-form__title">Авторизация</span>
                <div className="login-form-section">
                    <span className="login-form__label">Логин</span>
                    <input name="login" className="login-from__input"/>
                </div>
                <div className="login-form-section">
                    <span className="login-form__label">Пароль</span>
                    <input name="password" className="login-from__input"/>
                </div>
                <Button type = "submit">Вход</Button>
                <Button style="secondary">Забыли пароль?</Button>
                <span className="login-form__error-label" id = "error-label">Неверный логин или пароль</span>
            </form>
        </>
    )
}