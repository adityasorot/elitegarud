import React from "react";
import mainPage from "../../assets/mainPage.png";
import ContactBody from "../Contact/ContactBody";
import About from "./About";
import Products from "./Products";
const Home = () => {
    return (
        <div>
            <div style={{}}>
                <img src={mainPage} style={{ width: "100%" }} />
            </div>
            <About />
            <Products />
            <ContactBody />
        </div>
    );
};

export default Home;
