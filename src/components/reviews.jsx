import React, { Component } from 'react'; 
import Review from './common/review';  
import reviewsService from '../services/reviewsService.js'


class Reviews extends Component {
    state = { 
        reviews:[]
     }

     
     async componentDidMount(){  
      const allReviews = await reviewsService.getAllReviews();
      this.setState({reviews:allReviews.data});
     
     }

     
     

     

    render(){ 
        const{reviews} = this.state;
  
        return ( 
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                         <h1>Reviews</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12-md d-flex flex-column flex-wrap">
                        {reviews.length>0&&reviews.map((item,index)=>(
                            
                            <Review key={index} title={item.title} img={item.img}  body={item.body} comments={item.comments}/>
                        ))}
                    
                    </div>
                </div>



            </div>
          
         );
    }
}
 
export default Reviews;