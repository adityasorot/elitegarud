import React from "react";
import mainPage from "../../assets/mainPage.png";
import ContactBody from "../Contact/ContactBody";
import Footer from "../Footer/Footer";
import About from "./About";
import Address from "./Address";
import Products from "./Products";
const Home = () => {
    return (
        <div>
            <div style={{}}>
                <img src={mainPage} style={{ width: "100%" }} alt="mainpage" />
            </div>
            <About />
            <Products />
            <ContactBody />
            <Address />
            <Footer />
        </div>
    );
};

export default Home;
