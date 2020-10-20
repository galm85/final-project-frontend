import React from 'react';
import {Link} from 'react-router-dom';


const CardReview = ({_id,author,date,title,img}) => {
    return ( 
        <div className="card shadow mt-5" style={{width:"18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div class="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{fontSize:"1rem"}}>{date}</p>
                <p style={{fontSize:"1rem"}}>by: {author}</p>
                <Link to={`/review/${_id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
        
        </div>
     );
}
 
export default CardReview;