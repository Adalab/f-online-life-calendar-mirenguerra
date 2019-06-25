import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

class Calendar extends React.Component {
  render() {
    return (
      <div className="Calendar">
        <div className="Calendar__header">
          <Link to="/editor">
            <button className="Calendar__btn">+</button>
          </Link>
        </div>
        <div className="Calendar__body"> aquí las caras
        </div>
      </div>
    );
  }
}

export default Calendar;
