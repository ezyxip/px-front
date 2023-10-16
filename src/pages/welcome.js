import {Header} from "../components/header/header";
import {isAuth} from "../api/auth";
import {PageBody} from "../components/page-body/page-body";

export function Welcome(){
    let link = [
        {
            href: "/app/",
            name: "Главная"
        }
    ]
    let content = null;
    if(!isAuth()){
        content =
            <>
                <PageBody links={link}>
                    Авторизация не пройдена
                </PageBody>
            </>
    } else {
        content =
            <PageBody links={link}>
                Авторизация пройдена
            </PageBody>
    }
    return (
        <>
            <Header/>
            {content}
        </>
    )
}