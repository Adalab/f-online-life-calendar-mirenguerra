import React from "react";
import "./styles.scss";

class Calendar extends React.Component {
  render() {
    return (
      <div className="Calendar">
        <div className="Calendar__header">
          <button className="Calendar__btn">+</button>
        </div>
        <div className="Calendar__body">:)</div>
      </div>
    );
  }
}

export default Calendar;
