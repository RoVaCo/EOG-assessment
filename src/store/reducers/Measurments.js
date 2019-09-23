import * as actions from "../actions";

const initialState = {
    reading: {
        metric: null,
        measurements: {}
    }
};

const readingRecevied = (state, action) => {
    const readings = action.readingRecevied;
    const {
        metric,
        measurements
    } = readings;
    return {
        metric,
        measurements
    };
};

const handlers = {
    [actions.MEASURMENTS_RECEIVED]: readingRecevied
};

export default (state = initialState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
};