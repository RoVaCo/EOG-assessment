import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import { todayNow } from './Counting';

export const ChartData = () => {
    const metricName = useSelector((state) => state.measurment.metric)
    const readings = useSelector((state) => state.measurment.measurements)
    if (typeof readings === 'undefined') { return null }
    var workData = [];
    var readingUnit = null;
    // Having an issue with apollo and hooks. Temporary work around 
    for (var i = readings.length - 100; i < readings.length; i++) {
        var reading = {};
        readingUnit = readings[i]["unit"];
        reading.temperature = readings[i]["value"];
        reading.time = Math.round(((todayNow() - readings[i]["at"]) / 6000) * 100) / 100;
        workData.push(reading);
    };
    const data = workData;
    const titleData = metricName;
    let yLabel = '';
    if (readingUnit === 'F') { yLabel = 'Degrees °F' }
    else { yLabel = `${readingUnit}` }

    return (
        <div>
            <React.Fragment>
                <h4> {titleData} </h4>
                <ResponsiveContainer width="100%" height="90%" aspect={1.75}>
                    <LineChart data={data} margin={{ top: 24, right: 10, bottom: 12, left: 24, }} >
                        <XAxis dataKey="time" label={{ value: "Seconds Ago", dy: 15 }}>
                        </XAxis>
                        <YAxis type="number" domain={['dataMin', 'dataMax']} >
                            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>{yLabel}</Label>
                        </YAxis>
                        <Line type="natural" dataKey="temperature" stroke='blue' strokeWidth='3' dot={true} />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </React.Fragment>
        </div>)
};
