import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

class Calendar extends React.Component {
  render() {
    const { calendar, handleClearClick } = this.props;
    return (
      <div className="Calendar">
        <div className="Calendar__wrapper">
          <Link to="/editor">
            <button className="Calendar__btn" onClick={handleClearClick}>
              +
            </button>
          </Link>

          <ul className="Calendar__list">
            {calendar.map((item, i) => {
              let faceStatus =
                item[1].mood === ":)" ? "happy-face" : "sad-face";
              return (
                <li key={i} className={`Calendar__item ${faceStatus}`}>
                  {item[1].mood}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Calendar;
