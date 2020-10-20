import React from 'react';
import '../styles/home.css';
import userService from '../services/userService.js';
import {Link} from 'react-router-dom';


const Home = () => {

    let user = userService.getUser();

    return ( 
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-md-10 main-title mx-auto shadow text-center">
                    <h1 className="display-1 text-center my-title">GAMES REVIEWS</h1>
                    {user &&
                    <p>Welcome {user.firstName} {user.lastName}</p>
                    }
                    
                </div>
             </div>

             <div className="row text center mt-3">
             <div className="col-md-10 main-title mx-auto shadow text-center">
                    <h5>Share your reviews with others</h5>
                    <p> <i style={{color:"blue"}} className="fab fa-playstation mx-3"></i>|     
                        <i style={{color:"green"}} className="fab fa-xbox mx-3"></i>|    
                        <i style={{color:"yellow"}} className="fas fa-gamepad mx-3"></i>|     
                        <i style={{color:"red"}} className="fas fa-desktop mx-3"></i></p>
                </div> 
             </div>

             <div className="row text center mt-3">
                <div className="col-md-10 main-title mx-auto shadow text-center">
                    <p>please
                    <Link to="sign-in" > sign in </Link>
                    or
                    <Link to="sign-in" > Register </Link>
                    </p>
                </div>       
            </div>
       
       
       
       
        </div>
     );
}
 
export default Home;
