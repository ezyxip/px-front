let user = undefined;

export function isAuth(){
    if(user === undefined){
        return false;
    } else {
        return true;
    }
}

export function auth(login, password){
    if(login === "admin" && password === "pass"){
        user = {
            name: "Иван Иванович Иванов",
            login: "admin",
            roles: [
                "admin", "manager", "master"
            ]
        }

        return true;
    } else {
        return false;
    }
}

export function getCredentials(){
    if(isAuth()){
        return user;
    } else {
        return {
            name: "Guest",
            login: "",
            roles: []
        };
    }
}