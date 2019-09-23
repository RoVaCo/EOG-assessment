import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import * as counting from './Counting';

const query = gql`
query GetMeasurments($metric: String!)
{
    getMultipleMeasurements(input: { metricName: $metric }){
      metric
      measurements 
      {
        at
        value
        unit
      }}
}
`;

export const RetrieveMeasurments = props => {
    // const earlyTimestamp = counting.thirtyMinutesAgo();
    // const endTimestamp = new Date().getTime();
    let metric = useSelector((state) => state.metricSelected);
    const dispatch = useDispatch();
    console.log("Im a getting it");
    const { loading, error, data } = useQuery(
        query, { variables: { metric }, suspend: false });
    console.log("I got it");

    if (loading) return <h4> Loading ... </h4>;
    if (error) { dispatch({ type: actions.API_ERROR, error: error.message }); return <h4> error </h4>; };
    console.log("I got it")
    const [readingRecevied] = data.getMultipleMeasurements
    console.log(readingRecevied);
    dispatch({ type: actions.MEASURMENTS_RECEIVED, readingRecevied });
    return readingRecevied;
};