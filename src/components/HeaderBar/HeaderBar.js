import React from "react";
import {
    AppBar,
    Box,
    Button,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "white"
    }
}));

const HeaderBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Box
                        style={{
                            // backgroundColor: "red",
                            border: "0.2vw solid #404040",
                            paddingLeft: "1vw",
                            paddingRight: "1vw"
                        }}
                        borderRadius={16}
                    >
                        <Typography
                            style={{
                                fontSize: "1.4rem",
                                color: "#404040",
                                fontFamily: "Fira Sans"
                            }}
                        >
                            Elite Auto Engineers Pvt. Ltd.
                        </Typography>
                    </Box>
                    <div className={classes.grow} />
                    <Button style={{ color: "#404040", padding: "1vh" }}>
                        About
                    </Button>
                    {/* <Button style={{ color: "#404040", padding: "1vh" }}></Button> */}
                    <Button style={{ color: "#404040", padding: "1vh" }}>
                        Contact Us
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default HeaderBar;
