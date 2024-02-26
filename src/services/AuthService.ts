const tokenKey = 'token'

const authService = {
    setToken(token:string) {
    localStorage.setItem(tokenKey, token)
},
    getToken(){
    return localStorage.getItem(tokenKey)
},
    deleteToken() {
        localStorage.removeItem(tokenKey)
    }
}

export {
    authService
}