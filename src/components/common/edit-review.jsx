import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import PageHeader from "./pageHeader";
import { toast } from "react-toastify";
import reviewsService from "../../services/reviewsService";
import userService from "../../services/userService";
import {Redirect} from "react-router-dom";

/**
 * In this component: only "editor user" can get and update the review (title,body,img)
 */

class EditReview extends Form {
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


     async componentDidMount(){
         const id = this.props.match.params.id;
         const {data} = await reviewsService.getReviewById(id);
         this.setState({data:{_id:id,title:data.title,body:data.body,img:data.img}})
     }


    schema = {
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
    try{
       await reviewsService.editReview(data);
       toast("review updated");
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
        const user = userService.getUser();
        if(!user || !user.editor){
            return <Redirect to="/sign-in" />
        }
        
        return ( 
            <div className="container">
                 <PageHeader title="edit Review"/>

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

 
export default EditReview;