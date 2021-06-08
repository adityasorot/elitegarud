import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
import MainForm from "./MainForm";
const useStyles = makeStyles((theme) => ({
    introPara: {
        paddingTop: "5vh",
        paddingBottom: "5vh"
        // [theme.breakpoints.up("sm")]: {
        //     padding: "calc( 5vh + 5vw )"
        // }
    }
}));
const ContactForm = () => {
    const classes = useStyles();
    // const darkMode = useSelector((state) => state.darkMode);
    return (
        <div>
            <Grid
                container
                direction="column"
                // classes={{ root: classes.introPara }}
                spacing={1}
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
