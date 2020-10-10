import React from "react";
import { Link } from "react-router-dom";
import '../../styles/review.css';
import userService from '../../services/userService';
import reviewsService from "../../services/reviewsService";

const Review = ({ title, img, body, comments, _id, date ,author}) => {
  const user = userService.getUser();
  
  return (
        <div className="my-review container">
          
          <div className="row">
                <div className="col-md-5">
                     <img src={img} alt=""/>
                </div>
       
                <div className="col-md-7">
                      <h1>{title}</h1>
                      <p>{new Date(date).toLocaleDateString()} -  {new Date(date).toLocaleTimeString()}</p>
                      <p>By: {author}</p>
                      <p>{body}</p>
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
                      {user&&user.editor&&
                      (<button  className="btn btn-danger ml-auto"><i className="fas fa-trash-alt"></i></button>)
                      }
                      
                     </React.Fragment>
                  </div>
                </div>
                
                 )
                 )}
       
           
            <hr/>
            <div className="row text-center mb-3">
              <div className="col-md-12">
                  {user&&
          <Link to={`/new-comment/${_id}`} className="btn btn-primary">Add new comment</Link>
                  }
                  {!user&&
          <Link to={`register`} className="btn btn-primary">Add new comment</Link>
                  }
              </div>
          </div>
              
              


            </div>  
            

            
              
           

            
           
            

            
            
            
           

        
     


    // <div className="card">
    //   <img src={img} className="card-img-top width:50%" alt={title}></img>
    //   <div className="card-body">
    //     <h5 className="card-title">{title}</h5>
    //     <p>
    //       {new Date(date).toLocaleDateString()} -{" "}
    //       {new Date(date).toLocaleTimeString()}
    //     </p>
    //     <p className="card-text mb-5">{body}</p>
    //     {comments &&
    //       comments.map((comment, index) => <p key={index}>{comment.title}</p>)}

    //     <Link to={`/new-comment/${_id}`} className="btn btn-primary">
    //       Add new comment
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Review;
