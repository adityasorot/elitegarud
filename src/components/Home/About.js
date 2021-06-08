import { Typography } from "@material-ui/core";
import React from "react";

const About = () => {
    return (
        <div
            style={{
                padding: "calc( 1vh + 1vw )",
                marginTop: "10%",
                marginBottom: "10%"
            }}
        >
            <Typography
                variant="h3"
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#404040"
                }}
            >
                About Us
            </Typography>
            <div
                style={{
                    marginLeft: "20%",
                    marginRight: "20%",
                    marginTop: "5%"
                }}
            >
                <Typography style={{ fontSize: "1rem" }}>
                    “Elite Auto Engineers Private Limited”, is a famous
                    manufacturer of a qualitative assortment of Golf Cart
                    Battery Operated Rickshaw, Battery E-Cart, Electric
                    Rickshaw, Electric Rickshaw and Electric Loader Rickshaw.
                    Integrated in the year 2012, at Faridabad (Haryana, India),
                    we have developed an ultramodern infrastructural unit where
                    we manufacture these rickshaws and accessories in large
                    quantity with assured quality.
                </Typography>
            </div>
        </div>
    );
};

export default About;
