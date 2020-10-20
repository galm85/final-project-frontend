import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../../styles/review.css';
import userService from '../../services/userService';
import reviewsService from "../../services/reviewsService";
import {toast} from 'react-toastify';

/**
 * This component shows a card of a single review with a little content in the Reviews component.
 * the user card have the option to go to full view of the review, add to favorite.
 * an editor-user can, in addition to delete or edit the review
 */

class Review extends Component {
  state = { 
    data:{},
     
   }

componentDidMount(){
const data = this.props;
this.setState({data});

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
      toast(`${review.title} added to your favorites` );
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
   const  {_id,author,date,title,img,body,origin} = this.props;
   const user = userService.getUser();

    return ( 
      <div className="my-review container">
          <div className="row mt-5">
                
                <div className="col-md-5">
                     <img src={img} alt=""/>
                </div>
       
                <div className="col-md-6">
                      <h1>{title}</h1> 
                      <p>{new Date(date).toLocaleDateString()} -  {new Date(date).toLocaleTimeString()}</p>
                      <p>By: {author}</p>
                      <hr/>
                      <p>{body}</p>      
                </div>


     {/* in this div the options are change according to the user account (free/editor) and the rote he came from */}
                <div className="col-md-1 review-btn">

                {user && (
                    <Link to={`/full-review/${_id}`} origin="reviews" className="btn btn-success " ><i className="fas fa-expand"></i></Link>
                  )}

                  {user && origin==="review" && (
                        <button className="btn btn-primary mt-3" onClick={()=>this.addToFavorites(user._id,this.state.data)}>
                            <i className="far fa-star"></i>
                        </button>    
                  )}

                  {user && origin==="favorites" && (
                    <button onClick={()=>this.removeFromFavorite(user._id,_id)} className="btn btn-danger mt-3">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                  )}
                  
                    {user&&user.editor && origin==="review" &&(
                      <React.Fragment>
                      
                      <Link to={`/reviews/edit-review/${_id}`} className="btn btn-warning mt-3"><i className="fas fa-edit"></i></Link>
  
                      <button onClick={()=>this.removeReview(_id)} className="btn btn-danger  mt-3 ">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      
                      </React.Fragment>

                    )
                  }
                </div>

            </div>    
    </div>  
     );
  }
}
 
export default Review;


