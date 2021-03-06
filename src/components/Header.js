import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Full Stack Software Engineer</h1>
                <Typed className="typed-text"
                strings={["JavaScript", "MySQL", "MongoDB", "Express", "GraphQL","Node"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#contact" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
