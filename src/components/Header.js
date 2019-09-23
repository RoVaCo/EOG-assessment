import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Weather from "./Weather";
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MyAvatar from './MyAvatar';
import { GetMeasurments } from './ListItems';


const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  }
});

export default () => {
  const classes = useStyles();

  const name = "VanC's";
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {name} EOG React Visualization Assessment
                </Typography>
        <Weather />
        <MyAvatar className="">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </MyAvatar>
        <GetMeasurments />
      </Toolbar>
    </AppBar>
  );
};
