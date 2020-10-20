import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../../styles/review.css';
import userService from '../../services/userService';
import reviewsService from "../../services/reviewsService";
import {toast} from 'react-toastify';


class Review extends Component {
  state = { 
    review:{},
     
   }

  


async componentDidMount(){
const id = this.props.match.params.id;
const data = await reviewsService.getReviewById(id);
this.setState({review:data.data})
}

  removeReview= async(_id)=>{
    await reviewsService.removeReview(_id)
    window.location = '/reviews';
  }

  removeComment =async (reviewId,comment)=>{
      await  reviewsService.removeComment(reviewId,comment);
      toast("Comment deleted");
       window.location='/reviews'; 
  }

  addToFavorites = async (userId,review)=>{
    try{
      await userService.addToFavorite(userId,review);
      toast(` added to your favorites` );
    }catch(error){
      console.log(error);
    }
  }

  async removeFromFavorite(userid,id){ 
    await userService.removeFromFavorite(userid,id);
       toast("review removed from favorite")
      window.location=`/favorites/${userid}`; 
}
  
  render() { 
   const  {review} = this.state;
   const user = userService.getUser();
  
    return ( 
     
     <div className="my-review container">
          
          <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                     <img src={review.img} alt=""/>
                </div>
          </div>
          
          <div className="row">
                <div className="col-md-12">
                      <h1>{review.title}</h1> 
                      <p>{new Date(review.createdAt).toLocaleDateString()} -  {new Date(review.createdAt).toLocaleTimeString()}</p>
                      <p>By: {review.author}</p>
                      <hr/>
                      <p>{review.body}</p>      
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-1 review-btn">
                  {user &&  (
                        <button className="btn btn-primary" onClick={()=>this.addToFavorites(user._id,this.state.data)}>
                        <i className="far fa-star"></i>
                        </button>
                  )}

                  {user && origin==="favorites" && (
                    
                    <button onClick={()=>this.removeFromFavorite(user._id,review._id)} className="btn btn-danger">
                        <i className="fas fa-trash-alt"></i>
                    </button>
              )}
                  
                    {user.editor && 
                  <button onClick={()=>this.removeReview(review._id)} className="btn btn-danger  mt-3 ">
                      <i className="fas fa-trash-alt"></i>
                  </button>
                  }
                </div>

            </div>

              <hr className="mt-5"/>

              <div className="row">
                    <h6>Comments</h6>
              </div>

              {review.comments && review.comments.map((comment, index) =>(
                <div key={index} className="row">
                  <div className="col-12 d-flex flex-row mt-2">
                    <React.Fragment>
                      <details  className="mt-2">
                      <summary>{comment.title}</summary>
                        {comment.body}
                      </details>
                      
                      {user&&user.editor&&origin === "review" &&(
                        <button onClick={ ()=> this.removeComment(review._id,comment)}  className="btn btn-danger ml-auto">
                          <i className="fas fa-trash-alt"></i>
                        </button>
                        )}
                      
                     </React.Fragment>
                  </div>
                </div>
                
                 ))}
       
            <hr/>

            <div className="row text-center mb-3">
              <div className="col-md-12">
                 
                  {user&&origin==="review"&&
                      <Link to={`/new-comment/${review._id}`} className="btn btn-primary">Add new comment</Link>
                  }
                 
                  {!user&&origin==="review"&&
                      <Link to={`register`} className="btn btn-primary">Add new comment</Link>
                  }
              </div>
          </div>
              
              


    </div>  
     );
  }
}
 
export default Review;


