import React from "react";
import Calendar from "../Calendar/index";
import Editor from "../Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: JSON.parse(localStorage.getItem("calendar")) || [],
      date: "",
      mood: "",
      message: "",
      selectedMood: {}
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMood = this.handleChangeMood.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.state.calendar !== prevState.calendar) {
      localStorage.setItem("calendar", JSON.stringify(this.state.calendar));
    }
  }

  handleSubmitBtn() {
    const newDay = this.state.calendar;
    newDay.push({
      date: this.state.date,
      mood: this.state.mood,
      message: this.state.message
    });
    this.setState({ calendar: newDay });
  }

  handleChangeDate(event) {
    const dateValue = event.currentTarget.value;
    const { calendar } = this.state;
    const selectedDate = calendar.find(function(selected) {
      return selected.date === dateValue;
    });
    if (selectedDate) {
      alert(
        `La fecha ${dateValue} no está disponible, ya tiene un estado asignado. Elige otra.`
      );
      this.setState({
        selectedMood: selectedDate
      });
    } else {
      this.setState({
        date: dateValue
      });
    }
  }

  handleChangeMood(event) {
    const moodValue = event.currentTarget.value;
    this.setState({
      mood: moodValue
    });
  }

  handleChangeMessage(event) {
    const messageValue = event.currentTarget.value;
    this.setState({
      message: messageValue
    });
  }

  handleClearClick() {
    this.setState({
      date: "",
      mood: "",
      message: ""
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Calendar
                calendar={this.state.calendar}
                handleClearClick={this.handleClearClick}
              />
            )}
          />
          <Route
            path="/editor"
            render={() => (
              <Editor
                handleChangeDate={this.handleChangeDate}
                handleChangeMood={this.handleChangeMood}
                handleChangeMessage={this.handleChangeMessage}
                handleClearClick={this.handleClearClick}
                handleSubmitBtn={this.handleSubmitBtn}
                mood={this.state.mood}
                date={this.state.date}
                selectedMood={this.state.selectedMood}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
