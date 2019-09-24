import * as actions from "../actions";

const initialState = 'waterTemp';

const metricSelected = (state, action) => {
    const metric = action.metricSelected;
    console.log(metric);
    return (metric);
};

const handlers = { [actions.METRIC_SELECTED]: metricSelected };

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
