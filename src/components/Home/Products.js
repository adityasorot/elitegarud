import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemPro from "../ItemPro";
import garud from "../../assets/garud.png";
import garudpro from "../../assets/garudpro.png";
import garudplus from "../../assets/garudplus.png";
import garudssmodel from "../../assets/garudssmodel.png";
import shakti from "../../assets/shakti.png";
import garudscooter from "../../assets/garudscooter.png";
import garudproscooter from "../../assets/garudproscooter.png";
import { Button } from "@material-ui/core";

const items = [
    {
        name: "Garud",
        backgroundImage: `url(${garud})`,
        description: ""
    },
    {
        name: "Garud Pro",
        backgroundImage: `url(${garudpro})`,
        description: ""
    },
    {
        name: "Garud plus",
        backgroundImage: `url(${garudplus})`,
        description: ""
    },
    {
        name: "Garud SS Model",
        backgroundImage: `url(${garudssmodel})`,
        description: ""
    },
    {
        name: "Garud Shakti",
        backgroundImage: `url(${shakti})`,
        description: ""
    },
    {
        name: "Garud on Two",
        backgroundImage: `url(${garudscooter})`,
        description: ""
    },
    {
        name: "Garud Pro on two",
        backgroundImage: `url(${garudproscooter})`,
        description: ""
    }
];

const Products = () => {
    return (
        <div
            style={{
                marginLeft: "20%",
                marginRight: "20%",
                marginTop: "5%",
                marginBottom: "5%"
            }}
        >
            <Button
                variant="contained"
                href="https://drive.google.com/uc?export=download&id=178PhH7NE78EkqV4d6qpKbY7_1jBncZD4"
                style={{
                    marginBottom: "10vh",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            >
                Download Brochure
            </Button>
            <Carousel indicators={false}>
                {items.map((item) => (
                    <ItemPro key={item} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default Products;
