import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const getMetricList = gql`{getMetrics}`;

export const MetricReport = state => {

    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(getMetricList);
    if (loading) return <h4> Loading ... </h4>;
    if (error) { dispatch({ type: actions.API_ERROR, error: error.message }); return <h4> error </h4>; };
    const metrics = data.getMetrics.map(metric => ({
        value: metric,
        label: metric
    }));
    const metricsRecieved = metrics;
    dispatch({ type: actions.METRIC_LIST_RECEIVED, metricsRecieved });
    return metrics;
};
