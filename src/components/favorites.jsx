import React, { Component } from 'react';
import Review from './common/review';
import PageHeader from './common/pageHeader';
import reviewsService from '../services/reviewsService.js'

class Favorites extends Component {
    state = {  }
    
    
    async componentDidMount(){
       let  userId = this.props.match.params.userId;
        let favorites = await reviewsService.getUserFavorite(userId);
        this.setState({favorites:favorites.data});
        console.log(this.state.favorites);
    }

    
    
    render() { 
        


        return ( 
            <div className="container">
                <PageHeader title="My Favorite" text="These are all your favorites reviews"/>


                <div className="row">
                    <div className="col-md-12">
                        <Review />
                    </div>
                </div>
            </div>

           
         );
    }
}
 
export default Favorites;