import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        color: "#404040",
        borderColor: "#404040",
        width: "70vw",
        "&$focused $notchedOutline": {
            borderColor: "#404040",
            color: "#404040"
            // backgroundColor: "rgba(40,60,70,0.4)"
        },
        "&$error $notchedOutline": {
            borderColor: "#404040",
            color: "#404040"
            // backgroundColor: "rgba(40,60,70,0.4)"
        },
        [theme.breakpoints.up("sm")]: {
            width: "30vw"
        }
    },
    focused: {},
    error: {},
    notchedOutline: {
        borderColor: "#404040"
    },
    input: {
        color: "#404040"
        // fontSize: "calc(0.5vh + 0.5vw)"
    },
    rootLabel: {
        color: "#404040",
        "&$labelFocused": {
            color: "#404040"
            // backgroundColor: "rgba(40,60,70,0.4)"
        }
    },
    labelFocused: {}
}));
export const ModTextField = (props) => {
    const classes = useStyles();
    return (
        <div>
            <TextField
                InputProps={{
                    classes: {
                        root: classes.root,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                        input: classes.input,
                        error: classes.error
                    }
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.rootLabel,
                        focused: classes.labelFocused
                    }
                }}
                variant="outlined"
                {...props}
            ></TextField>
        </div>
    );
};
