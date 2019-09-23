import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import weatherReducer from "./reducers/Weather";
import metricReducer from "./reducers/Metrics.js";
import measurmentReducer from "./reducers/Measurments.js";
import metricSelectorReducer from "./reducers/MetricSelector";

export default () => {
  const rootReducer = combineReducers({
    weather: weatherReducer,
    metrics: metricReducer,
    measurment: measurmentReducer,
    metricSelected: metricSelectorReducer
  });

  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, composeEnhancers(middlewares));

  sagas.forEach(sagaMiddleware.run);

  return store;
};
