import {Header} from "../components/header/header";
import {PageBody} from "../components/page-body/page-body";


export function UsersPage(){
    let link = [
        {
            href: "/app/admin/users",
            name: "Пользователи"
        }
    ]
    return (
        <>
            <Header/>
            <PageBody links={link}>

            </PageBody>
        </>
    );
}