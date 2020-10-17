import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../../styles/review.css';
import userService from '../../services/userService';
import reviewsService from "../../services/reviewsService";
import {toast} from 'react-toastify';


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
   const  {_id,author,date,title,img,body,comments,origin} = this.props;
   
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

                <div className="col-md-1 review-btn">

                  {user && origin==="review" && (
                    
                        <button className="btn btn-primary" onClick={()=>this.addToFavorites(user._id,this.state.data)}>
                            <i className="far fa-star"></i>
                        </button>
                  )}

                  {user && origin==="favorites" && (
                    
                    <button onClick={()=>this.removeFromFavorite(user._id,_id)} className="btn btn-danger">
                        <i className="fas fa-trash-alt"></i>
                    </button>
              )}
                  
                    {user.editor && origin==="review" &&
                  <button onClick={()=>this.removeReview(_id)} className="btn btn-danger  mt-3 ">
                      <i className="fas fa-trash-alt"></i>
                  </button>
                  }
                </div>

            </div>

              <hr className="mt-5"/>

              <div className="row">
                    <h6>Comments</h6>
              </div>

              {comments && comments.map((comment, index) =>(
                <div key={index} className="row">
                  <div className="col-12 d-flex flex-row mt-2">
                    <React.Fragment>
                      <details  className="mt-2">
                      <summary>{comment.title}</summary>
                        {comment.body}
                      </details>
                      
                      {user&&user.editor&&origin === "review" &&(
                        <button onClick={ ()=> this.removeComment(_id,comment)}  className="btn btn-danger ml-auto">
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
                      <Link to={`/new-comment/${_id}`} className="btn btn-primary">Add new comment</Link>
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


