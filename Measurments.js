import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";


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

    let metric = useSelector((state) => state.metricSelected);
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(
        query, { variables: { metric }, suspend: false });
    if (loading) return <h4> Loading ... </h4>;
    if (error) { dispatch({ type: actions.API_ERROR, error: error.message }); return <h4> error </h4>; };
    console.log("I got it")
    const [readingRecevied] = data.getMultipleMeasurements
    console.log(readingRecevied);
    dispatch({ type: actions.MEASURMENTS_RECEIVED, readingRecevied });
    return readingRecevied;
};