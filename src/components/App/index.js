import React from "react";
import Calendar from "../Calendar/index";
import Editor from "../Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedMoods: JSON.parse(localStorage.getItem("savedMoods")) || [],
      selectedMood: {
        date: "",
        mood: ":)",
        message: "",
        errorMessage: false
      }
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMood = this.handleChangeMood.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.state.savedMoods !== prevState.savedMoods) {
      localStorage.setItem("savedMoods", JSON.stringify(this.state.savedMoods));
    }
  }

  handleSubmitBtn() {
    const newDay = this.state.savedMoods;
    newDay.push(this.state.selectedMood);
    this.setState({ savedMoods: newDay });
  }

  handleChangeDate(event) {
    const dateValue = event.currentTarget.value;
    const { savedMoods } = this.state;
    const selectedDate = savedMoods.find(function(selected) {
      return selected.date === dateValue;
    });
    if (selectedDate) {
      selectedDate.errorMessage = true;
      this.setState({
        selectedMood: selectedDate
      });
    } else {
      this.setState(prevState => {
        return {
          selectedMood: {
            ...prevState.selectedMood,
            date: dateValue,
            errorMessage: false,
          }
        };
      });
    }
  }

  handleChangeMood(event) {
    const moodValue = event.currentTarget.value;
    this.setState(prevState => {
      return {
        selectedMood: {
          ...prevState.selectedMood,
          mood: moodValue
        }
      };
    });
  }

  handleChangeMessage(event) {
    const messageValue = event.currentTarget.value;
    this.setState(prevState => {
      return {
        selectedMood: {
          ...prevState.selectedMood,
          message: messageValue
        }
      };
    });
  }

  handleClearClick() {
    this.setState({
      date: "",
      mood: ":)",
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
                savedMoods={this.state.savedMoods}
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
