import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, routerReducer } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import rootSaga from "sagas/rootSaga";
import contentReducer from "redux/content/reducer";
import stylesReducer from "redux/styles/reducer";
import immutableTransform from "redux-persist-transform-immutable";
import { persistStore, autoRehydrate } from "redux-persist";
import thunk from "redux-thunk";

export const makeStore = () => {
  const history = createHistory();

  const rootReducer = combineReducers({
    routing: routerReducer,
    content: contentReducer,
    styles: stylesReducer,
  });

  const initialState = {};
  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [autoRehydrate()];
  const middleware = [routerMiddleware(history), sagaMiddleware, thunk];

  // if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
  // }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(rootReducer, initialState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return new Promise(resolve => {
    persistStore(
      store,
      {
        keyPrefix: "v10-",
        whitelist: ["talentCards", "progress", "styles"],
        transforms: [immutableTransform()],
      },
      () => resolve(store)
    );
  });
};

export default makeStore;
