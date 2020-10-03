import React, { Component } from 'react';
import Input from './input';

class Form extends Component {

    handleChange = ({currentTarget:input}) => {
        const user = {...this.state.user};
        user[input.name] = input.value;
        this.setState({user});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.doSubmit();
    }


    renderButton(label){
      return  <button className="btn btn-outline-primary">{label}</button>
    }


    renderInput(name,placeholder,type="text"){
        return(
            <Input
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={this.handleChange}
            
            />
        )
    }


    
}
 
export default Form;