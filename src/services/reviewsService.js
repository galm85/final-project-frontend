import httpService from './httpService'
import {apiUrl} from '../config.json'


export function getAllReviews(){
    return httpService.get(`${apiUrl}review`);
    // return httpService.get('http://localhost:4000/review');
   }
   
   
   export default {
       getAllReviews
   }