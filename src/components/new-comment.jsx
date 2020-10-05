import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class NewComment extends Form {
  state = {};

  schema = {
    title: Joi.string().required().min(2).max(255).label("Title"),
    body: Joi.string().max(1024).label("Comment"),
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <form>
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
