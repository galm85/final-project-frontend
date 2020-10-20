import React, { Component } from 'react';
import Review from './common/review';
import PageHeader from './common/pageHeader';
import userService from '../services/userService';

class Favorites extends Component {
    state = { 
        favorites:[]
     }
    
    
    async componentDidMount(){
        let userId = this.props.match.params.userId;
        let favorites = await userService.getUserFavorite(userId);
        this.setState({favorites:favorites.data.fav});
    }


    render() { 
        const user = userService.getUser();
        let {favorites} = this.state;        
        console.log(favorites)
        return ( 
            <div className="container">
                <PageHeader title={`${user.firstName}'s Favorites`} text="These are all your favorites reviews"/>


                <div className="row mt-5">
                    <div className="col-md-12">

                       {favorites.length>0 && favorites.map((fav,index)=>(
                        <Review key={index} _id={fav._id} author={fav.author} date={fav.date} title={fav.title} img={fav.img}  body={fav.body} comments={fav.comments} origin="favorites"/>
                       ))} 

                       {favorites.length === 0 &&(
                           <p className="text-center"><i>No Favorites yet</i></p>
                       )}
                        
                    </div>
                </div>
            </div>

           
         );
    }
}
 
export default Favorites;