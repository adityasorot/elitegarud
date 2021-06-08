import { Typography } from "@material-ui/core";
import React from "react";
import ContactForm from "./ContactForm";

const ContactBody = () => {
    return (
        <div>
            <Typography
                variant="h3"
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#404040"
                }}
            >
                Contact Us
            </Typography>
            <ContactForm />
        </div>
    );
};

export default ContactBody;
