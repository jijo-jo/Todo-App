//Secret key to create accessToken and refreshToken for authentication and authorisation.

const config = {
    secret : '244d078e2e0591601145e2ee825585e65411ff216bef017f81bd0cac7466901ae4eb77d1b42293e148f71d615b04f946a430a4a0f97d425fd527ea1194522876',
    accessExpire : "240000s" ,
    refreshExpire : "480000s"
}

module.exports = config;