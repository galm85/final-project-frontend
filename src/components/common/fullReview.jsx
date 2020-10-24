import React,{Component} from 'react';
import reviewsService from '../../services/reviewsService.js';
import userService from '../../services/userService.js';
import '../../styles/fullReview.css';
import {toast} from 'react-toastify';
import { Link,Redirect } from "react-router-dom";

/**
 * This component shows full review of a selected review from the reviews page;
 * this is only visible to sign-in users
 * 
 * A "sign-in user" can post comment and add it to his favorite page;
 * an "Editor user" in addition can edit or delete the review and the comments;
 */

class FullReview extends Component {
    state = {  }

    async componentDidMount(){
        const id = this.props.match.params.id;
        const review = await reviewsService.getReviewById(id);
        this.setState({review:review.data});
        const user = userService.getUser();
        this.setState({user})
    }



    addToFavorites = async (userId,review)=>{
    
        try{
          await userService.addToFavorite(userId,review);
          toast(`${review.title} added to your favorites` );
        }catch(error){
          console.log(error);
        }
      }

      removeReview= async(_id)=>{
        await reviewsService.removeReview(_id)
        window.location = '/reviews';
      }
    
      removeComment =async (reviewId,comment)=>{
      await  reviewsService.removeComment(reviewId,comment);
      toast("Comment deleted");
    
      window.location =`/full-review/${reviewId}`;

      }


    render() { 
        const review = this.state.review;
        const user = userService.getUser();
        
        if(!user){
            return <Redirect to="/sign-in" />
        }
        
        if(review){
        return ( 
            
                <div className="my-full-review">
                    <div className="row text-center">
                        <div className="col-10">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
        
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <h1 className="text-center">{review.title}</h1>
                            
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 ">
                             <p>{new Date(review.createdAt).toLocaleDateString()} -  {new Date(review.createdAt).toLocaleTimeString()}</p>
                            <p>{review.author}</p>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8">
                            <p className="text-justify">{review.body}</p>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 text-center">
                        {user && (
                            
                                <button className="btn btn-primary mr-1" onClick={()=>this.addToFavorites(user._id,review)}>
                                    <i className="far fa-star"></i>
                                </button>    
                        )}

            
                        {user&&user.editor  &&(
                            <React.Fragment>
                                <Link to={`/reviews/edit-review/${review._id}`} className="btn btn-warning"><i class="fas fa-edit"></i></Link>

                                <button onClick={()=>this.removeReview(review._id)} className="btn btn-danger ml-1">
                                     <i className="fas fa-trash-alt"></i>
                                </button>

                            </React.Fragment>
                        )

                            
                        }
                        </div>
                    </div>

                <hr/>

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8">
                            <h4>Comments:</h4>
                    </div>
                    </div>

                    <div  className="row justify-content-center mb-5">
                    <div className="col-md-8 ">
                    {review.comments && review.comments.map((comment, index) =>(
                    
                      <React.Fragment>
                        <details className="d-flex flex-column mt-2" key={index} >
                        <summary className="col-md-12">{comment.title}
                        {user&&user.editor&&(
                          <button  onClick={ ()=> this.removeComment(review._id,comment)}  className="btn btn-danger ml-5">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          )}
                        </summary>
                          {comment.body}
                          
                        </details>
                        
                        
                        
                       </React.Fragment>
                       ))}
                    </div>
                  </div>
                
                 

                    <div className="row justify-content-center ">
                        <div className="col-12-8">
                        {user&&(
                                <Link to={`/new-comment/${review._id}`} className="btn btn-primary">Add new comment</Link>
                        )}
                        </div>
                    </div>

                       
            </div>
                    
                
         )};
       
             return(
                    <p><i>Loading</i></p>
                    )
        

         
    }
}
 
export default FullReview;
 
