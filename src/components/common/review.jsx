import React from 'react';
import {Link} from 'react-router-dom';


const Review = ({title,img,body,comments,id,date}) => { 
    
    return ( 
        <div className="card" >
            <img src={img} className="card-img-top width:50%" alt={title}></img>
            <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{new Date(date).toLocaleDateString()} - {new Date(date).toLocaleTimeString()}</p>
                    <p className="card-text mb-5">{body}</p>
                    {comments && comments.map((comment,index)=>(
                        <p key={index}>{comment.title}</p>
                    ))}
                   
                    <Link to="" id={id}  className="btn btn-primary">Add new comment</Link>

            </div>
        </div>    

     );
}
 
export default Review;