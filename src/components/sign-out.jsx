import React, { Component } from 'react';
import userService from '../services/userService';

class Signout extends Component {
    state = {  }

    componentDidMount(){
        userService.signOut();
        window.location = '/'
    }

    render() { 
        return null;
    }
}
 
export default Signout;