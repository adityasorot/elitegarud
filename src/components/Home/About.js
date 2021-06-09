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
            id="about"
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
                    Experiences fuelled by innovations, forward thinking, and a
                    commitment to bring the very best to Indian roads. From the
                    day the iconic ELITE was launched in 2015, the company has
                    been spearheading a revolution of change. Turning an entire
                    country’s need for driving, into its love for driving.
                    However, tastes and demands keep on evolving with each new
                    generation of India. This has not been looked at by ELITE
                    AUTO as a challenge, but as an inspiration to go beyond
                    traditional boundaries of e-Rickshaw making. Infusing design
                    and technology is one such step taken by our company to meet
                    future demand & give the best to our customers . . Today,
                    ELITE Auto Engineers Pvt Ltd has its eyes set firmly on the
                    possibilities of tomorrow and every body is invited to this
                    journey
                </Typography>
            </div>
        </div>
    );
};

export default About;
