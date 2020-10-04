import React from 'react';
import {Link} from 'react-router-dom';

const Review = ({title,img,body,comments}) => { 
    return ( 
        <div className="card" >
            <img src={img} className="card-img-top width:50%" alt={title}></img>
            <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text mb-5">{body}</p>
                    {comments.map((comment,index)=>(
                        <p key={index}>{comment}</p>
                    ))}
                    <Link to="" className="btn btn-primary">Add new comment</Link>

            </div>
        </div>    

     );
}
 
export default Review;