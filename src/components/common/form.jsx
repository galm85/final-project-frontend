import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  validateForm = () => {
    const {error} = Joi.validate(this.state.user, this.schema, {
      abortEarly: false
    });
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };


  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user});
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };



  renderButton(label) {
    return <button className="btn btn-outline-primary">{label}</button>;
  }

  renderInput(name, placeholder, type = "text") {
    return (
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={this.handleChange}
        errors={this.state.errors[name]}
      />
    );
  }
}

export default Form;
