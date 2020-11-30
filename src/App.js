import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.scss";
// COMPONENTS
import Register from "./components/Register";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch> 
          <Route exact path='/' component={Register} /> 
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
