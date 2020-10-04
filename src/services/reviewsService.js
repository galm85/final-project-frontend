import httpService from './httpService'



export function getAllReviews(){
    return httpService.get('http://localhost:4000/review');
   }
   
   
   export default {
       getAllReviews
   }