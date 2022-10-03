var DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
var CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
var DB_CONNECTION = import.meta.env.VITE_AUTH0_DB_CONNECTION;
const RETURN_URL = import.meta.env.VITE_RETURN_URL;

var webAuth = new auth0.WebAuth({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    redirectUri: RETURN_URL,
    responseType: 'token'
});

const login = (username, password, callback) => {
    var database = DB_CONNECTION;

    webAuth.login({
        realm: database,
        username: username,
        password: password,

    }, callback);
}

export const loginWith = (provider, callback) => {
    webAuth.authorize({
        connection: provider
    }, callback);
}

export const checkSession = (callback) => {
    webAuth.checkSession({}, callback);
}

export const logout = () => {
    webAuth.logout({
        returnTo: RETURN_URL,
        clientID: CLIENT_ID,
    });
}

export const parseHash = (callback) => {
    webAuth.parseHash({ hash: window.location.hash }, callback);
}

export const userInfo = (accessToken, callback) => {
    webAuth.client.userInfo(accessToken, callback);
}



export default login;