import React from 'react';
import Form from './common/form';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import reviewsService from '../services/reviewsService.js';
import userService from '../services/userService';
import {toast} from 'react-toastify';
import{Redirect} from 'react-router-dom';

/**
 * this component is only visible to an "editor-user" from the reviews component.
 * it is allow the the "editor user" to post a new review (title,body,img - not must);
 * 
 * 
 */


class NewReview extends Form {
    state = { 
        data:
            {
                title:"",
                body:"",
                img:""
            }
        ,
        errors:[]
     }


    schema = {
        email:Joi.string(),
        _id:Joi.string(),
        title:Joi.string().required(),
        body:Joi.string().required(),
        img:Joi.string().allow(""),
    }

   async doSubmit(){
    const data = {...this.state.data};
    if(data.img===""){
        data.img="https://semantic-ui.com/images/wireframe/image.png";
    }
    const user = userService.getUser();
    data.userId = user._id;
    data.author = user.email

    
    try{
       await reviewsService.postNewReview(data);
       toast("Thank tou for your Review");
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
        const user = userService.getUser()
        if(!user|| !user.editor){
           return <Redirect to="/sign-in" />
        }

        return ( 
            <div className="container">
                 <PageHeader title="New Review" text="Please insert a new review"/>

                <div className="row text-center mt-5">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('title','Title')}
                            {this.renderInput('img',"Image(url)")}
                            {this.renderTextArea('body',"Review","10")}
                            {this.renderButton('Post')}
                            
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NewReview;