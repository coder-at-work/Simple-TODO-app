import React from 'react';
import './App.css';
import Main from "./Main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store/reducer";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
