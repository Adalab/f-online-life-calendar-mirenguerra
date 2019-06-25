import React from "react";
import "./styles.scss";
import Calendar from "../Calendar/index";
import Editor from "../Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarDay: {
        date: "",
        mood: "",
        message: ""
      }
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMood = this.handleChangeMood.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeDate(event) {
    const dateValue = event.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        date: dateValue
      };
    });
  }

  handleChangeMood(event) {
    const moodValue = event.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        mood: moodValue
      };
    });
  }

  handleChangeMessage(event) {
    const messageValue = event.currentTarget.value;
    this.setState(prevState => {
      return {
        ...prevState,
        message: messageValue
      };
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
                handleChangeMessage={this.handleChangeMessage}
                handleCancelBtn={this.handleCancelBtn}
                mood={this.state.mood}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
