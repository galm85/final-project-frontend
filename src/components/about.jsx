import React from 'react';
import PageHeader from './common/pageHeader';

const About = () => {
    return ( 
        <div className="contanier">
            <PageHeader title="About Games Reviews" />
            
            <div className="row  mt-5 justify-content-center">
                <div className="col-md-8 ">
                    <p style={{color:"black",fontSize:"1.7rem"}}>
                    this app is about video games reviews.
                        it is allows to the user (according to the their registration) to read,write,edit,delete reviews and comments
 
                    </p>
                    <h4 className="text-center mb-4">
                        there are 3 different accounts in this app

                    </h4>

                    <p style={{color:"black",fontSize:"1.7rem"}}>
                    <b>guest</b> - a user who did not sigh in to the app.
           guest user can only read the simple card of review.
           he can not read full review, add to favorite, post comment to review nor add new review.

                    </p>
                    <p style={{color:"black",fontSize:"1.7rem"}}>
                    <b> sign-in user</b>- a user who register to the app with a free-account.
                  he can read the full-review, add to favorite, post comments to a review;
                  he <b>CAN NOT</b> post a new review.

                    </p>

                    <p style={{color:"black",fontSize:"1.7rem"}}>
                    <b>Editor user</b> - a user who register to the app with editor-account. 
                 he can read review,add to favorite,post a new review, edit/delete a review,
                 read/post/delete comments of a review.

                    </p>
                </div>
            </div>

            <div className="row"></div>
        </div>
     );
}
 
export default About;