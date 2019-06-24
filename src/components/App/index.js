import React from "react";
import "./styles.scss";
import Calendar from "../Calendar/index";
import Editor from "../Editor";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <Editor />
      </div>
    );
  }
}

export default App;
