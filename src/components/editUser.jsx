import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import PageHeader from './common/pageHeader';
import userService from "../services/userService";
import { toast } from "react-toastify";


/**
 * This component allow to a sign-in user to change his user data and his account type (free/editor)
 */

class EditUser extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
    },
    errors: [],
  };

  componentDidMount(){
      const data = userService.getUser()
      this.setState({data:{firstName:data.firstName,lastName:data.lastName}});
  }

  //isEditor function check which type of account the user wants (returns true if the user is an editor);
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
  };

  async doSubmit() {

    try{
      const {_id} = userService.getUser();  
      const data = {...this.state.data};
      data.editor= this.isEditor();
      data._id = _id; 
      await userService.updateUser(data);
      toast('Your Account has been update');
      window.location = "/reviews";
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
    const  user = userService.getUser();
    return (
      <div className="container">
          <PageHeader title="Edit Profile" text="Edit your profile and account type"/>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("firstName", "First Name")}
              {this.renderInput("lastName", "Last Name")}
            <div >

                <label >Register As:</label>
                <br/>

                
                {/* this part checks if the user is already have an editor account or free account 
                and change the selected radio option according to it  */}
                
                {user.editor && (
                    <React.Fragment>
                    <input type="radio"  name="registerAs" id="free" className="mr-2"  />
                    <label id="Regular">Free Account</label>
                    <br/>
                    <input type="radio" name="registerAs" id="editor" className="mr-2" defaultChecked/>
                    <label id="editor">Editor Account</label>
                    </React.Fragment>
                )}
                
                {!user.editor && (
                    <React.Fragment>
                    <input type="radio"  name="registerAs" id="free" className="mr-2" defaultChecked />
                    <label id="Regular">Free Account</label>
                    <br/>
                    <input type="radio" name="registerAs" id="editor" className="mr-2" />
                    <label id="editor">Editor Account</label>
                    </React.Fragment>
                )}
              </div>
            
              {this.renderButton("Update")}
              

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
