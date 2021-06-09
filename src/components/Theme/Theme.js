import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
    palette: {
        type: "light"
        // primary: blue,
        // secondary: yellow
    },
    overrides: {
        MuiButton: {
            label: {
                textTransform: "none"
            }
        },
        MuiTypography: {
            body1: {
                textTransform: "none"
            }
        },
        MuiSvgIcon: {
            root: {
                color: "white"
            }
        },
        typography: {
            fontFamily: "Fira Sans"
        }
    }
});
