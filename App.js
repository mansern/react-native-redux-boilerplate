import React from "react";
import CompleteStack from "./src/navigations/AuthenticationStackNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducers from "./src/redux/reducers";

const middleware = [logger, thunk];
const store = createStore(Reducers, applyMiddleware(...middleware));
export default function App() {
  return (
    <Provider store={store}>
      <CompleteStack />
    </Provider>
  );
}
