import React, { Component } from 'react';
import {NavLink,Link} from 'react-router-dom'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Video Games</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                         <li className="nav-item active">
                             <NavLink className="nav-link" to="">About <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                        </li>
                    </ul>


                    <ul className="navbar-nav ml-auto">
                         <li className="nav-item active">
                             <NavLink className="nav-link" to="">Sign In <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                    </ul>

                    
    
  </div>
</nav>
         );
    }
}
 
export default NavBar;
