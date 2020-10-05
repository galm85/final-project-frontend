import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import userService from '../services/userService';

class Signin extends Form  {
    state = { 
        data:{
            email:"",
            password:""
        },
        errors:[]
     }

     schema = {
                email: Joi.string().required().min(2).max(255).email().label("Email"),
                password: Joi.string().required().min(6).max(255).label("Password"),
     }

    async doSubmit(){
        const {data} = this.state;
        
        try{
         await userService.signIn(data)
                alert("welcome Back");  
                window.location = "/";  
        }
        catch(error){
            alert("try again");
            this.setState({data:{email:"",password:""}})
            window.location = "/sign-in";  
            
        }}
       


    


    render() { 
        return ( 
        <div className="container">
            <div className="row text-center">
                <div className="col-md-12">
                    <h1>Please sign in</h1>
                </div>
            </div>


            <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('email','Email')}
                            {this.renderInput('password','Password','password')}
                            {this.renderButton('Sign in')}
                        </form>
                    </div>      
                
            </div>
                


           



        </div> 
        );
    }
}
 
export default Signin;