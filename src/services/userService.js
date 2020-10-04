import httpService from './httpService'
import {apiUrl} from '../config.json'


export function registerNewUser(user){
 return httpService.post(`${apiUrl}users/`,user);
}

export function signIn(user){
    return httpService.post(`${apiUrl}users/sign-in`,user);
   }


export default {
    registerNewUser,
    signIn
}