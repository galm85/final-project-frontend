import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import reviewsService from '../services/reviewsService.js';
import userService from '../services/userService';


class NewReview extends Form {
    state = { 
        data:[],
        errors:[]
     }


    schema = {
        _id:Joi.string(),
        title:Joi.string().required(),
        body:Joi.string().required(),
        img:Joi.string(),
    }

   async doSubmit(){
    const data = {...this.state.data};
    const user = userService.getUser();
    data.userId = user._id;

    console.log(data);
    try{
       await reviewsService.postNewReview(data);
       this.props.history.replace('/reviews');  
    }
    catch(e){
       if(e.response && e.response.status === 400){
           alert('Please Sign in to post review');
           this.props.history.replace('/sign-in');
       }
        
    }
    }



    render() { 
        return ( 
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('title','Title')}
                            {this.renderInput('body',"Text")}
                            {this.renderInput('img',"Image(url)")}
                            {this.renderButton('Post')}
                            
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NewReview;