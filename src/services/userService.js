import httpService from './httpService'
import jwtDecode from "jwt-decode";
import {apiUrl} from '../config.json'


export async function registerNewUser(user){
 return await httpService.post(`${apiUrl}users/`,user);
}

export async function signIn(user){
    const {data} =  await httpService.post(`${apiUrl}users/sign-in`,user);
    localStorage.setItem("Token",data.token);
   }
 
export function signOut(){
    localStorage.removeItem('Token');
}   

 export function getUser(){
     try{
         const token = localStorage.getItem("Token");
         return jwtDecode(token);
     }
     catch(error){
         return null;
     }
 }  


export default {
    registerNewUser,
    signIn,
    getUser,
    signOut
}