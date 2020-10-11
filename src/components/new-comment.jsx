import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import PageHeader from './common/pageHeader';
import reviewsService from '../services/reviewsService.js';
import userService from '../services/userService.js';
import {toast} from 'react-toastify';

class NewComment extends Form {
  state = {
    data:{
      title:"",
      body:"",
    },
    errors:[]
  };

  schema = {
    title: Joi.string().required().min(2).max(255).label("Title"),
    body: Joi.string().max(1024).label("Comment"),
    userId: Joi.string()
  };


  async doSubmit(){
    const user = userService.getUser();
    const id = this.props.match.params.id;
    const {data} = this.state;
    data.userId = user.id;
    try{
     await reviewsService.postNewComment(id,data);
     toast("Thank tou for your comment");
     this.props.history.replace('/reviews');
    }
    catch(err){
      
      console.log(err);
    }
    
    
  }


  render() {
    
    return (
      <div className="container">
                        <PageHeader title="New Comment" text="please write a new comment"/>

        <div className="row text-center mt-5">
          <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("title", "Title")}
              {this.renderInput("body", "Type your comment")}
              {this.renderButton("Post")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewComment;
