import React from "react";
import "./styles.scss";
import Calendar from "../Calendar/index";
import Editor from "../Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      mood: "",
      isChecked: false
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMood = this.handleChangeMood.bind(this);
  }

  handleChangeDate(event) {
    const dateValue = event.currentTarget.value;
    this.setState({
      date: dateValue
    });
  }

  handleChangeMood(event) {
    const moodValue = event.currentTarget.value;
    this.setState({
      mood: moodValue,
      isChecked: !this.state.isChecked
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Calendar />} />
          <Route
            path="/editor"
            render={() => (
              <Editor
                handleChangeDate={this.handleChangeDate}
                handleChangeMood={this.handleChangeMood}
                isChecked={this.state.isChecked}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
