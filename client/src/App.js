import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import ContactUs from "./components/ContactUs";
import LandingPage from "./components/LandingPage";
import DetailPage from "./components/DetailPage";
//import CreatePost from "./components/CreatePost";
//App 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about-us" component={Sidebar} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/posts" component={LandingPage} />
          <Route exact path="/posts/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
