import React from "react";
import HelloWorld from "./HelloWorld";

import { createStore } from "redux";
import reducer from "./reducers";

const initialState = { tech: "React" };
const store = createStore(reducer, initialState);

export default () => {
  return <HelloWorld tech={store.getState().tech}/>
}
