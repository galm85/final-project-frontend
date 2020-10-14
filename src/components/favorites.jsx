import React, { Component } from 'react';
import Review from './common/review';
import PageHeader from './common/pageHeader';
import reviewsService from '../services/reviewsService.js'

class Favorites extends Component {
    state = { 
        favorites:[]
     }
    
    
    async componentDidMount(){
       let  userId = this.props.match.params.userId;
        let favorites = await reviewsService.getUserFavorite(userId);
        this.setState({favorites:favorites.data.fav});
        console.log(this.state);
    }

    
    
    render() { 
        
        let {favorites} = this.state;        
        

        return ( 
            <div className="container">
                <PageHeader title="My Favorite" text="These are all your favorites reviews"/>


                <div className="row">
                    <div className="col-md-12">

                       {favorites.length>0 && favorites.map((fav,index)=>(
                        <Review key={index} _id={fav._id} author={fav.author} date={fav.createdAt} title={fav.title} img={fav.img}  body={fav.body} comments={fav.comments}/>
                       ))} 
                        
                    </div>
                </div>
            </div>

           
         );
    }
}
 
export default Favorites;