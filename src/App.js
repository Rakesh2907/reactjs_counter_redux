import React from "react";
import { Provider } from "react-redux";
import CounterComponent from "./CounterComponent";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent />
      </div>
    </Provider>
  );
}

export default App;
