import React from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import full from "../../assets/full.png";
import elite from "../../assets/Elite.png";
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "white"
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
            height: "10vh",
            width: "30%",
            marginLeft: "2w"
        }
    },
    sectionMobile: {
        display: "flex",
        height: "7vh",
        width: "20%",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }
}));

const HeaderBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <img
                        src={full}
                        alt="logo"
                        className={classes.sectionDesktop}
                    />
                    <img
                        src={elite}
                        alt="logo"
                        className={classes.sectionMobile}
                    />
                    <div className={classes.grow} />
                    <Button
                        style={{ color: "#404040", padding: "1vh" }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "#about";
                        }}
                    >
                        About
                    </Button>
                    <Button
                        style={{ color: "#404040", padding: "1vh" }}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "#contactus";
                        }}
                        variant="contained"
                    >
                        Contact Us
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default HeaderBar;
