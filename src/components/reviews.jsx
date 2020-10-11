import React, { Component } from 'react'; 
import Review from './common/review';  
import PageHeader from './common/pageHeader';
import reviewsService from '../services/reviewsService.js';
import userService from '../services/userService.js';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

class Reviews extends Component {
    state = { 
        reviews:[],
        user:{}
     }
     
     async componentDidMount(){  
      const user = await userService.getUser();
      this.setState({user});
        const allReviews = await reviewsService.getAllReviews();

      allReviews.data=allReviews.data.sort((a,b)=>{
          if(a.createdAt > b.createdAt) return -1;
          if(a.createdAt < b.createdAt) return 1;
           return 0;

      })
      this.setState({reviews:allReviews.data});
     
     }


     freeAccountBtn = () =>{
        toast.error("Your free account not allow to post new review, please register as editor");
     }


    render(){ 
        const{reviews,user} = this.state;
        return ( 
            <div className="container">
                
                <PageHeader title="Reviews" text="read and write reviews"/>



                <div className="row mt-5 text-center">
                    <div className="col-md-12">

                  
                    {!user && 
                        <Link disabled className="btn btn-lg btn-outline-primary" to='sign-in'>Add New Review</Link>
                    
                    }
                    {user && !user.editor &&
                        <button  className="btn btn-lg btn-outline-primary"  onClick={this.freeAccountBtn}>Add New Review</button>
                    
                    }
                    {user && user.editor &&
                     <Link className="btn btn-lg btn-outline-primary" to='/new-review'>Add New Review</Link>
                    }
                      </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12-md d-flex  flex-wrap">
                        {reviews.length>0&&reviews.map((item,index)=>(
                            
                            <Review key={index} _id={item._id} author={item.author} date={item.createdAt} title={item.title} img={item.img}  body={item.body} comments={item.comments}/>
                            
                        ))}
                    
                    </div>
                </div>



            </div>
          
         );
    }
}
 
export default Reviews;