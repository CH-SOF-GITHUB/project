import React from 'react';
import Navber from "./Navber";

const SideBar = () => {
    return (
        <>
            <Navber />
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT US</span>
                    <img
                        src="https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="failed" />
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre
                        provisoire pour calibrer une mise en page, le texte définitif venant remplacer
                        le faux-texte dès qu'il est prêt ou que la mise en page est achevée.
                        Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Big data</li>
                        <li className="sidebarListItem">Software architecture</li>
                        <li className="sidebarListItem">Infrastructure maintenance</li>
                        <li className="sidebarListItem">Software programming</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW ME</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;