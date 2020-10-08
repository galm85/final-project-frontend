import React,{Component} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";



//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Register from "./components/register";
import userService from './services/userService.js';
import Signin from "./components/sign-in";
import Signout from "./components/sign-out";
import Reviews from "./components/reviews";
import NewReview from "./components/new-review";
import NewComment from "./components/new-comment";
import EditUser from "./components/editUser"


class App extends Component {
  
  state = {
    user:{}
    }

  componentDidMount(){
    const user = userService.getUser()
    this.setState({user}); 
       

  }
  
  
  render() { 
    return ( 
      <div className="d-flex flex-column min-vh-100 ">
        <ToastContainer />
      <header>
        <Navbar  user={this.state.user}/>
      </header>

      <main className="flex-fill">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/edit-user" component={EditUser} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-out" component={Signout} />
          <Route path="/new-review" component={NewReview} />
          <Route path="/new-comment/:id" component={NewComment} />
        </Switch>
      </main>

      <footer className="mt-3">
        <Footer />
      </footer>
    </div>
     );
  }
}
 
export default App;





