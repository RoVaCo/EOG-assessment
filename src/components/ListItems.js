import React from 'react';
import { RetrieveMeasurments } from './Measurements';
import MetricLister from './ListBuilder';

export const GetMeasurments = props => {
    //const now = new Date().getTime();
    //console.log(now);
    RetrieveMeasurments(props);
    return null
}

export const mainListItems = (
    < div >
        <div className='main' style={{ marginBottom: 100 }} >
        </div>
        <MetricLister />
    </div >
);
