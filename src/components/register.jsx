import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "../services/userService";
import { toast } from "react-toastify";

class Register extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    errors: [],
  };

  isEditor = ()=>{
    const editor = document.getElementById('editor');
    if(editor.checked === true){
      return true;
    }
    return false;
  }

  schema = {
    firstName: Joi.string().required().min(2).max(255).label("First Name"),
    lastName: Joi.string().required().min(2).max(255).label("Last Name"),
    email: Joi.string().required().min(2).max(255).email().label("Email"),
    password: Joi.string().required().min(6).max(255).label("Password"),
  };

  async doSubmit() {

    try{
      const data = {...this.state.data};
      
      data.editor= this.isEditor();
      
      
      await userService.registerNewUser(data);
      toast('Welcome to Game Reviews')
      this.props.history.replace("/sign-in");
    }
    catch(err){
     if(err.response&&err.response.data){
       const {data} = err.response
       toast.error(data);
       this.setState({data:{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }})
     }

    }
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-md-12">
            <h1>Please Register to Games Reviews</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("firstName", "First Name")}
              {this.renderInput("lastName", "Last Name")}
              {this.renderInput("email", "Email")}
              {this.renderInput("password", "Password", "password")}
              <div >
                <label >Register As:</label>
                <br/>
                <input type="radio"  name="registerAs" id="free" className="mr-2" defaultChecked/>
                <label id="Regular">Free Account</label>
                <br/>
                <input type="radio" name="registerAs" id="editor" className="mr-2"/>
                <label id="editor">Editor Account</label>
                
              </div>
              
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
