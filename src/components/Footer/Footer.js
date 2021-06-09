import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "white",
        marginTop: "2vh"
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Typography
                        style={{
                            fontSize: "1rem",
                            color: "#404040",
                            fontFamily: "Fira Sans"
                        }}
                    >
                        © Elite Auto Engineers Pvt. Ltd. All Rights Reserved
                    </Typography>
                    <div className={classes.grow} />
                    {/* <Button style={{ color: "#404040", padding: "1vh" }}>
                        About
                    </Button>
                    <Button style={{ color: "#404040", padding: "1vh" }}>
                        Contact Us
                    </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Footer;
