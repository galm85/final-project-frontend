import React from 'react';
import Form from './common/form';
import PageHeader from './common/pageHeader';
import Joi from 'joi-browser';
import userService from '../services/userService';
import {toast} from 'react-toastify';

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
          toast(`Welcome back ${this.state.email}`)  
             window.location = "https://gal-games-reviews.netlify.app/reviews";  
        }
        catch(error){
            if(error.response&&error.response.data){
                const {data} = error.response
                toast.error(data);
                this.setState({data:{email:"",
                password:""}})
            }
              
            
        }}
       


    


    render() { 
        return ( 
        <div className="container">
                    <PageHeader title="Sign In" text="Please sign in to your account"/>



            <div className="row mt-5 text-center">
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