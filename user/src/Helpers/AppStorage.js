/* eslint-disable */
class AppStorage{
    storeToken(token){
         localStorage.setItem('token',token);
    } 
    storeUser(user){
        localStorage.setItem('user', user);
    }
    storeEmail(email){
        localStorage.setItem('email', email);
    }
    store(user,email ,token){
        this.storeToken(token)
        this.storeUser(user)
        this.storeEmail(email)
    }
    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
    getToken(){
        return localStorage.getItem('token')
    }
    getUser(){
        return localStorage.getItem('user')
    }
    getEmail(){
        return localStorage.getItem('email')
    }
}

export default AppStorage= new AppStorage()
/* eslint-disable */