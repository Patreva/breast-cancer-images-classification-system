/* eslint-disable */
import User from './User';

    const handle=(error)=>{
        this.isExpired(error.response.data.error)
    }
    const isExpired=(error)=>{
        if(error == 'Token is not provided'){
            User.logout()
        }
    }


export default {handle, isExpired};
/* eslint-disable */