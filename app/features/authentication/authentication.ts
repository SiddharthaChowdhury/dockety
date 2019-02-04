import {IdPersistence, utilPersistence} from "../../utils/utilPersistence";

class Authentication {
    public login = (cb: () => any) => {
        utilPersistence.setValue(IdPersistence.auth, {token: "123", rememberMe: true});
        cb();
    };

    public logout = (cb: () => any) => {
        utilPersistence.setValue(IdPersistence.auth, {token: ""});
        cb();
    };

    public isAuthenticated = () => {
        const {token} = utilPersistence.getValue(IdPersistence.auth);
        return !!token;
    }
}

export default new Authentication();