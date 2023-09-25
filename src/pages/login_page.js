import {Header} from "../components/header/header";
import {auth} from "../api/auth";

export function LoginPage(){
    return(
        <>
            <Header/>
            <h1 onClick={()=>{auth("admin", "pass")}}>Авторизоваться</h1>
        </>
    )
}