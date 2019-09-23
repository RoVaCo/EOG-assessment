// #####################################
// For use with the planned error reporting and event tracking functions if time permits

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        background: theme.palette.primary.main,
        marginRight: "1rem",
        marginLeft: "1rem",
        width: 60,
        height: 60,
    }
});

const MyAvatar = () => { return (<Avatar alt="Portrait of Van" src={require("../images/60x60.png")} />) };

export default withStyles(styles)(MyAvatar);


