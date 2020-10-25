Review Games

this app is about video games reviews.
it is allows to the user (according to the their registration) to read,write,edit,delete reviews and comments

there are 3 different accounts in this app

1. guest - a user who DID NOT sigh in to the app.
   guest user can only read the simple card of review.
   he can not read full review, add to favorite, post comment to review nor add new review.

2. sign-in user - a user who register to the app with a free-account.
   he can read the full-review, add to favorite, read/post comments to a review;
   he CAN NOT post a new review.

3. Editor user - a user who register to the app with editor-account.
   he can read review,add to favorite,post a new review, edit/delete a review,
   read/post/delete comments of a review.

ACCOUNTS

editor accounts

    email: admin@admin.com
    password:123456

---

sign-in user (free account)

    email:galm85@gmail.com
    password:123456

    email:benlevi@email.com
    password:123456

---

Database

the database name is : VideoGamesReview

collection:

1. users - all the users that sign-in to the app;
   each user contain his personal details and his favorites reviews.
   2)reviews - all the reviews that the users posted.
   each review contain title,body,image (url),date,the author who post the review and a array of comments.
   only editor account can post new review.
