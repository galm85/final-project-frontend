import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import reviewsService from '../services/reviewsService.js'

class NewComment extends Form {
  state = {
    data:[],
    errors:[]
  };

  schema = {
    title: Joi.string().required().min(2).max(255).label("Title"),
    body: Joi.string().max(1024).label("Comment"),
  };


  async doSubmit(){
    const id = this.props.match.params.id;
    const {data} = this.state;
    try{
     await reviewsService.postNewComment(id,data)
     this.props.history.replace('/reviews')
    }
    catch(err){
      
      console.log(err);
    }
    
    
  }


  render() {
    
    return (
      <div className="container">
        <div className="row text-center">
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
