/* eslint-disable */
import Token from './Token' 
import AppStorage from './AppStorage'

class User {
    // login(formdata){
    // }
    responseAfterLogin(res){
        //console.log(res);
        const access_token =res.data.token;
        const username =res.data.user;
        const email = res.data.email;
        if(Token.isValid(access_token)){
            AppStorage.store(username,email,access_token)
            window.location='/dashboard'
        }


    }
    geToken(){
        const storageToken = AppStorage.getToken();
        return storageToken 
    }

    hasToken(){
        const storedToken = AppStorage.getToken();
        if(storedToken){
            return Token.isValid(storedToken) ? true : this.logout()
        }
        return false
    }
    loggedIn(){
        return this.hasToken()
    }
    logout(){
        AppStorage.clear()
        window.location='/'
    }
    name(){
        if(this.loggedIn()){
            return AppStorage.getUser()
        }
    }
    email(){
        if(this.loggedIn()){
            return AppStorage.getEmail()
        }
    }
        id(){
            if(this.loggedIn()){
                const payload=Token.payload(AppStorage.getToken())
                return payload.sub
            }
        }

        own(id){
            return this.id()==id
        }
        admin(){
            return this.id()==1
        }
    
}


export default User=new User();
/* eslint-disable */