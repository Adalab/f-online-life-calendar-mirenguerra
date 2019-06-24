import React from "react";
import "./styles.scss";
import Calendar from "../Calendar/index";
import Editor from "../Editor";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date:'',
    }
    this.handleChangeDate=this.handleChangeDate.bind(this);
  }

  handleChangeDate(event){
    const dateValue = event.currentTarget.value;
    this.setState({
      date: dateValue,
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Calendar />} />
          <Route path="/editor" render={() => <Editor handleChangeDate={this.handleChangeDate} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
