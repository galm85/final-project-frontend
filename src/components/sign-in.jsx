import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class Signin extends Form  {
    state = { 
        user:{
            email:"",
            password:""
        },
        errors:[]
     }

     schema = {
                email: Joi.string().required().min(2).max(255).email().label("Email"),
                password: Joi.string().required().min(6).max(255).label("Password"),
     }

    doSubmit(){
        console.log("submit")
    }


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