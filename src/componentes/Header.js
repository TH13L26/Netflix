import React from "react";
import './Header.css';

export default ({black}) =>{
    return (
        <header  className={black ? 'black' : ' '}>
            <div className="header--logo">
                <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/2560px-Netflix_2014_logo.svg.png" alt="Netflix"></img>
                </a>
                
            </div>
            <p>Home</p>
            <p>Tv Shows</p>
            <p>Filmes</p>
            <p>Series</p>
            <p>Originais</p>
            <p>Minha Lista</p>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
                </a>
            </div>
        </header>
    );
}