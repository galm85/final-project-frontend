import httpService from './httpService'
import {apiUrl} from '../config.json'


export function getAllReviews(){
    return httpService.get(`${apiUrl}review`);
    
   }

export function postNewReview(review){
    return httpService.post(`${apiUrl}review/`,review);
    
   }
   
   
   export default {
       getAllReviews,
       postNewReview
   }