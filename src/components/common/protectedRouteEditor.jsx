import React from 'react';
import { Route,Redirect } from "react-router-dom";
import userService from "../../services/userService";

const ProtectedRouteUser = ({path,component:Component,render,...rest}) => {
    const user = userService.getUser();
    
    return ( 
        <Route 
            {...rest}
            render = {(props)=>{
                if(!user || (rest.editor && !user.editor)){
                    return <Redirect to={
                        {
                            pathname:"/sign-in",
                            
                        }
                    } />

                }

                return Component ? <Component {...rest}/> : render (props);
            }}


            />

     );
}
 
export default ProtectedRouteUser;