import React from 'react';
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import * as actions from "../store/actions";
import { MetricReport } from "./MetricNames";

const MetricLister = ({ setMetric }) => {

    let mlist = MetricReport();

    var menu = [];
    for (var i = 0; i < mlist.length; i++) {
        menu.push(<ListItem button key={i} style={{ margin: 10, marginBottom: 40 }} onClick={setMetric(`${mlist[i].value}`)}><Avatar alt={mlist[i].value} src={require("../images/" + `${mlist[i].value}` + ".png")} />
            <ListItemText primary={mlist[i].value} /></ListItem>)
    }
    return <div>{menu}</div>
}

const mapStatetoProps = (state) => { return { metricSelected: state.metricSelected } };
const mapDispatchtoProps = dispatch => ({
    setMetric: (metricSelected) => {
        return () => {
            dispatch({ type: actions.METRIC_SELECTED, metricSelected });
        };
    }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(MetricLister);
