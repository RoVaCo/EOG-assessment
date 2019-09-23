import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import * as counting from './Counting';

const now = new Date().getTime()

const query = gql`
query GetMeasurments($metric: String! $after: Timestamp)
{
    getMultipleMeasurements(input: { metricName: $metric after:$after}){
      metric
      measurements 
      {
        at
        value
        unit
      }}
}
`;

export const RetrieveMeasurments = now => {
    let metric = useSelector((state) => state.metricSelected);
    const [after, setAfter] = useState((new Date().getTime()) - 180000);
    console.log(after);
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(
        query, { variables: { metric, after }, suspend: false });
    if (loading) return <h4> Loading ... </h4>;
    if (error) { dispatch({ type: actions.API_ERROR, error: error.message }); return <h4> error </h4>; };
    const [readingRecevied] = data.getMultipleMeasurements
    dispatch({ type: actions.MEASURMENTS_RECEIVED, readingRecevied });
    return readingRecevied;
};