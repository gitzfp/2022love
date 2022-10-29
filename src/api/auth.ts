import client from "./client";

const login = (email: string, password: string) =>
    client.post("/login", {
        type: 1,
        email,
        password,
    });

const ghostLogin = () => client.post("/ghostLogin");

const register = (email: string, password: string, inviteCode?: string) =>
    client.post("/register", {
        type: 1,
        email,
        password,
        inviteCode: inviteCode || "-1",
    });

const validationToken = () => client.post("/getLoginState");

const apiAuth = {
    login,
    register,
    ghostLogin,
    validationToken,
};

export default apiAuth;
