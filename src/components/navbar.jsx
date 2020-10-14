import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends Component {
    state = {  }
    render() { 

        const {user} = this.props;
        return ( 
            
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand my-link" to="/">Games Reviews</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                         <li className="nav-item">
                             <NavLink className="nav-link my-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link my-link" to="/reviews">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link my-link" to={`/favorites/${user._id}`}>My Favorites</NavLink>
                             
                            
                        </li>
                    </ul>


                    <ul className="navbar-nav ml-auto">
                        
                        {user && (
                            <React.Fragment>
                        <li className="nav-item ">
                        <NavLink className="nav-link my-link" to="/edit-user">edit User<span className="sr-only">(current)</span></NavLink>
                        </li>

                        <li className="nav-item ">
                             <NavLink className="nav-link my-link" to="/sign-out">{user.email}<span className="sr-only">(current)</span></NavLink>
                        </li>
                        </React.Fragment>
                        )}

                        {!user && (
                            <React.Fragment>
                         <li className="nav-item">
                             <NavLink className="nav-link my-link" to="/sign-in">Sign In <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link my-link" to="/register">Register</NavLink>
                        </li>
                        </React.Fragment>
                        )}
                    </ul>

                    
    
  </div>
</nav>
         );
    }
}
 
export default NavBar;
