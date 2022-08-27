import React from "react"
import "./Header.css"
import randyTom from "../images/randy-tom.png"

const Header = () => {
    return (
        <div className="nav">
            <img className="randy-tom" src={randyTom} alt="randy tom logo"/>
            <h1>Randy Tom's Burritos</h1>
        </div>
    )
}

export default Header