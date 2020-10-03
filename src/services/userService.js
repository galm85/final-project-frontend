import httpService from './httpService'


export function registerNewUser(user){
 return httpService.post('http://localhost:4000/users/',user);
}


export default {
    registerNewUser
}