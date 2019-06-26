import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

class Calendar extends React.Component {
  render() {
    const { calendar } = this.props;
    return (
      <div className="Calendar">
        <div className="Calendar__wrapper">
          <Link to="/editor">
            <button className="Calendar__btn">+</button>
          </Link>

          <ul className="Calendar__list">
            {calendar.map((item, i) => {
              let faceStatus = item === ":)" ? "happy-face" : "sad-face";
              return (
                <li key={i} className={`Calendar__item ${faceStatus}`}>
                  {item}
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
