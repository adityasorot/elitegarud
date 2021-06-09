import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Address = () => {
    return (
        <div style={{ padding: "10vh" }}>
            <Grid container>
                <Grid item>
                    <Typography
                        variant="h4"
                        style={{ fontWeight: "Bold", color: "#404040" }}
                    >
                        Our Location{" "}
                    </Typography>
                    <br />
                    <Typography style={{ marginLeft: "1vw" }}>
                        UNIT -1 :<br />
                        Plot No. 25, <br />
                        Gali no.-1 Ghazipur Industrial Area Sohna Road, <br />
                        Faridabad (Haryana) <br />
                        <a href="mailto:vinod@elitegarud.com">
                            vinod@elitegarud.com
                        </a>
                    </Typography>
                </Grid>
                <Grid item style={{ marginLeft: "10vw", marginTop: "5vh" }}>
                    <Typography style={{ fontWeight: "Bold" }}>
                        Do mention your Contact above <br />
                        so we can reach out to you
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Address;
