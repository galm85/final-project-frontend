import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./components/register";
import Home from "./components/home";
import Reviews from "./components/reviews";
import Signin from "./components/sign-in";
import NewReview from "./components/new-review";
import NewComment from "./components/new-comment";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/new-review" component={NewReview} />
          <Route path="/new-comment" component={NewComment} />
        </Switch>
      </main>

      <footer className="mt-3">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
