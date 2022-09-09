const ACESS_TOKEN_KEY = 'ACESS_TOKEN_KEY'
export const  tokenService = {
    save(acessToken){
        localStorage.setItem(ACESS_TOKEN_KEY,acessToken)
        sessionStorage.setItem(ACESS_TOKEN_KEY,acessToken)
    },
    get(){
        return localStorage.getItem(ACESS_TOKEN_KEY)
    },
    delete(){
        localStorage.removeItem(ACESS_TOKEN_KEY)
        sessionStorage.removeItem(ACESS_TOKEN_KEY)
    },

}