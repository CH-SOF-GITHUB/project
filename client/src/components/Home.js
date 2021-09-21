import React from "react";
import Navber from "./Navber";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Sidebar from "./Sidebar";

function Home() {
    return (
        <div>
            <Navber />
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm">React & Node</span>&nbsp;
                    <span className="headerTitleLg">Mern App</span>
                </div>
                <img
                    className="headerImg"
                    src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="failed"
                />
            </div>
        </div>
    );
}

export default Home;