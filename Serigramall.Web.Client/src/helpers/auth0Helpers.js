

export function isDbUser(user) {
    var userArray = user.sub.split("|");
    return userArray[0] === "auth0";
}