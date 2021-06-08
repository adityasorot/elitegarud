import React from "react";
import Carousel from "react-material-ui-carousel";
import ItemPro from "../ItemPro";
import item1 from "../../assets/4.png";
import item2 from "../../assets/10.png";

const items = [
    {
        name: "Elite Auto",
        backgroundImage: `url(${item1})`,
        description: "Description"
    },
    {
        name: "Elite Auto",
        backgroundImage: `url(${item2})`,
        description: "Description"
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
            <Carousel indicators={false}>
                {items.map((item) => (
                    <ItemPro key={item} item={item} />
                ))}
            </Carousel>
        </div>
    );
};

export default Products;
