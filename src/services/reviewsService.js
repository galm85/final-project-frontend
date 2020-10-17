import httpService from './httpService'
import {apiUrl} from '../config.json'
//"apiUrl":"http://localhost:4000/"



export function getAllReviews(){
    return httpService.get(`${apiUrl}review`);
   }

export function getReviewByTitle(title){
    return httpService.get(`${apiUrl}review/${title}`)
}

export function postNewReview(review){
    return httpService.post(`${apiUrl}review/`,review);
   }

export function removeReview(id){
    return httpService.delete(`${apiUrl}review/delete/${id}`);
}

export function postNewComment(id,comment){
    return httpService.patch(`${apiUrl}review/${id}`,comment);
}

export function removeComment(id,comment){
    return httpService.patch(`${apiUrl}review/comments/delete/${id}`,comment)
}

export function getCommentsByReview(id){
    return httpService.get(`${apiUrl}review/comments/${id}`);
}

export function addToFavorite(userId,review){
    return httpService.post(`${apiUrl}review/favorite/${userId}`,review);
}

export function getUserFavorite(userId){
    return httpService.get(`${apiUrl}review/favorite/${userId}`)
}
   
   
   export default {
       getAllReviews,
       postNewReview,
       postNewComment,
       removeComment,
       getCommentsByReview,
       removeReview,
       addToFavorite,
       getUserFavorite,
       getReviewByTitle
   }