import * as actions from "../actions";

const initialState = {
    metrics: null
};

const metricsRecieved = (state, action) => {
    const metrics = action.metricsRecieved;
    return { metrics };
};

const handlers = {
    [actions.METRIC_LIST_RECEIVED]: metricsRecieved

};


export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};
