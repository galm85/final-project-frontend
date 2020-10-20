import React, { Component } from 'react'; 
import Review from './common/review';  
import PageHeader from './common/pageHeader';
import reviewsService from '../services/reviewsService.js';
import userService from '../services/userService.js';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';


/**
 * This component get all the reviews from the server and display each one in a "Review" component;
 * everybody has an access to this component (guest,users,editors).
 * guest - can only see the simple review display.
 * user - can see the simple display, read in full-mode ,read/add comments to each review and add to favorites
 * editor - in addition to the user access, can also to add/edit/delete reviews and comments.
 */

class Reviews extends Component {
    state = { 
        reviews:[],
        user:{},
        search:"",
     }
     
     async componentDidMount(){  
      const user = await userService.getUser();
      this.setState({user});
      this.getAllReviews();
     
     }


     ////functions 

     async getAllReviews(){
        const allReviews = await reviewsService.getAllReviews();
        allReviews.data=allReviews.data.sort((a,b)=>{
          if(a.createdAt > b.createdAt) return -1;
          if(a.createdAt < b.createdAt) return 1;
           return 0;
      })
      this.setState({reviews:allReviews.data});
     }


     async getReviewsByTitle(title){
         const filterdReviews = await reviewsService.getReviewByTitle(title);
         filterdReviews.data=filterdReviews.data.sort((a,b)=>{
            if(a.createdAt > b.createdAt) return -1;
            if(a.createdAt < b.createdAt) return 1;
             return 0;
        })
        this.setState({reviews:filterdReviews.data});
    
     }


     freeAccountBtn = () =>{
        toast.error("Your free account not allow to post new review, please register as editor");
     }

     handleChange = ({currentTarget:input})=>{
      this.setState({search:input.value});
      let search = this.state.search;
      if(search!==""){
        this.getReviewsByTitle(search);     
     }else{
         this.getAllReviews();
     }

    }

     handleSubmit = async (e)=>{
        e.preventDefault();
        let search = this.state.search;
        if(search!==""){
           this.getReviewsByTitle(search); 
               
        }else{
            this.getAllReviews();
        }
    }
        

    render(){ 
        const{reviews,user,search} = this.state;
        return ( 
            <div className="container">
                <PageHeader title="Reviews" text="read and write reviews"/>


                {/* this div allow to search review by type the title of the review */}
                <div className="row mt-3 text-center">
                    <div className="col-md-12">
                        <form className="form-group d-flex" onSubmit={this.handleSubmit}>
                            <input placeholder="Search" type="text" value={search}  className="form-control mr-3" onChange={this.handleChange} />
                            <button  type="submit" className="btn btn-primary"><i className="fas fa-search"></i></button>    
                        </form>
                
                 {search && (<p>Results for: {this.state.search}</p>)}
                        
                    </div>
                </div>



            {/* this div display data according to the user account */}
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
                            
                            <Review key={index} 
                                    _id={item._id} 
                                    author={item.author} 
                                    date={item.createdAt} 
                                    title={item.title} 
                                    img={item.img}  
                                    body={item.body} 
                                    comments={item.comments} 
                                    origin="review"/>
                            
                        ))}

                        {reviews.length===0 &&
                        <p>No Reviews Found</p>
                        }
                    
                    </div>
                </div>



            </div>
          
         );
    }
}
 
export default Reviews;