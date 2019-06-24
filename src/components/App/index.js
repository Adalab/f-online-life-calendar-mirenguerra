import React from "react";
import "./styles.scss";
import Calendar from "../Calendar/index";
import Editor from "../Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Calendar />} />
          <Route path="/editor" render={() => <Editor />} />
        </Switch>
      </div>
    );
  }
}

export default App;
