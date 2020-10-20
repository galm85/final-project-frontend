import React, { Component } from 'react';
import Review from './common/review';
import PageHeader from './common/pageHeader';
import reviewsService from '../services/reviewsService.js';
import userService from '../services/userService';
import { toast } from 'react-toastify';
import CardReview from './common/card-review';

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
        
        let {favorites} = this.state;        

        return ( 
            <div className="container">
                <PageHeader title="My Favorite" text="These are all your favorites reviews"/>


                <div className="row mt-5">
                    <div className="col-md-12">

                       {favorites.length>0 && favorites.map((fav,index)=>(
                        <Card-Review key={index} _id={fav._id} author={fav.author} date={fav.createdAt} title={fav.title} img={fav.img}  body={fav.body} comments={fav.comments} origin="favorites"/>
                       ))} 
                        
                    </div>
                </div>
            </div>

           
         );
    }
}
 
export default Favorites;