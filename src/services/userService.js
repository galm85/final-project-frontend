import httpService from './httpService'
import jwtDecode from "jwt-decode";
import {apiUrl} from '../config.json'


export async function registerNewUser(user){
 return await httpService.post(`${apiUrl}users`,user);
}

export async function updateUser(user){
    const {data} = await httpService.put(`${apiUrl}users/update-user`,user);
    localStorage.setItem("Token",data.token);
   }

export async function signIn(user){
    const {data} =  await httpService.post(`${apiUrl}users/sign-in`,user);
    localStorage.setItem("Token",data.token);
   }
 
export function signOut(){
    localStorage.removeItem('Token');
} 

export function getUserFavorite(userId){
    return httpService.get(`${apiUrl}users/favorite/${userId}`)
}

export function addToFavorite(userId,review){
    return httpService.put(`${apiUrl}users/favorite/${userId}`,review);
}

export function removeFromFavorite(userId,_id){
    return httpService.put(`${apiUrl}users/favorites/delete/${userId}`,{"_id":_id});
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
    signOut,
    updateUser,
    getUserFavorite,
    addToFavorite,
    removeFromFavorite
    
}