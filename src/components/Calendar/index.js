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
                item.mood === ":)" ? "happy-face" : "sad-face";
              return (
                <div className="tooltip" key={i} >
                  <li className={`Calendar__item ${faceStatus}`}>
                    {item.mood}
                  </li>
                  <span className="tiptext">{`${item.date} ${
                    item.message
                  }`}</span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Calendar;
