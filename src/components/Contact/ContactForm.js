import { Grid, Typography } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
import MainForm from "./MainForm";

const ContactForm = () => {
    // const darkMode = useSelector((state) => state.darkMode);
    return (
        <div>
            <Grid
                container
                direction="column"
                // classes={{ root: classes.introPara }}
                // spacing={1}
                alignItems="center"
            >
                <Grid item>
                    <Typography
                        // color="secondary"
                        variant="h5"
                        style={{ padding: "calc( 0.7vh + 0.7vw )" }}
                    >
                        Tell us what you are looking for?
                    </Typography>
                </Grid>
                <Grid item>
                    <MainForm />
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactForm;
