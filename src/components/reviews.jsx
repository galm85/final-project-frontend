import React, { Component } from 'react'; 
import Review from './common/review';  

class Reviews extends Component {
    state = { 
        reviews:[
            {
                title:"demo title",
                body:"demo body",
                img:"https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Assassin%27s_Creed.jpg/220px-Assassin%27s_Creed.jpg",
                comments:["sadas","dsadsad","frewfe"]
            }
        ]
     }
    render() { 
        const {reviews} = this.state;
        return ( 
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                         <h1>Reviews</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12-md d-flex flex-column flex-wrap">
                        {reviews.map((review,index) =>(
                           <Review key={index} title={review.title} img={review.img} body={review.body} comments={review.comments}/> 
                        ))}
                    
                    </div>
                </div>



            </div>
          
         );
    }
}
 
export default Reviews;