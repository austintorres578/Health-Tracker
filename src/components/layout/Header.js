import React from "react";
import '../../assets/styles/component-styles/Header.css'

function Header(){
    return(
        <header>
            <a href='/'><img src="/images/header/nav-img.png"></img></a>
            <nav>
                <a href="#">Steps</a>
            </nav>
        </header>
    )
}

export default Header;