import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import nextReduxWrapper from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function configureStore(initialState: any = {}): any {
  let store: any = {};
  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;
  const persistConfig: any = {
    key: ".rosterspot.localstorage.app.key",
    storage,
    whitelist: ["userProfileState", "locationState"],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([thunkMiddleware, sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default function withRedux(BaseComponent: any) {
  return nextReduxWrapper(configureStore)(BaseComponent);
}
