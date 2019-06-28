import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
// import moment from 'moment';

const Editor = props => {
  const {
    handleChangeDate,
    handleChangeMood,
    mood,
    date,
    handleChangeMessage,
    handleClearClick,
    handleSubmitBtn
  } = props;
  // let today = moment().format('YYYY-MM-DD')

  return (
    <form className="Editor">
      <div className="Editor__wrapper">
        <fieldset className="Editor__dateInput">
          <label className="Editor__dateInput-label" htmlFor="date">
            Fecha
          </label>
          <input
            className="Editor__dateInput-input input"
            type="date"
            id="date"
            name="date"
            onChange={handleChangeDate}
            // min={today}
            // max={today}
            disable="2019-06-06"
            required
          />
        </fieldset>
        <fieldset className="Editor__mood">
          <label className="Editor__mood-label">¿Cómo es tu día?</label>
          <div className="Editor__mood-inputs">
            <label className="Editor__mood-label" htmlFor="smile">
              <input
                className="Editor__mood-smiley input"
                id="smile"
                type="radio"
                value=":)"
                name="mood"
                onChange={handleChangeMood}
                required
              />
              :)
            </label>
            <label className="Editor__mood-label" htmlFor="sad">
              <input
                className="Editor__mood-sad input"
                id="sad"
                type="radio"
                value=":("
                name="mood"
                onChange={handleChangeMood}
                required
              />
              :(
            </label>
          </div>
        </fieldset>
        {mood === ":)" ? (
          <fieldset className="Editor__message">
            <label className="Editor__message-label" htmlFor="message">
              Mensaje{" "}
              <span className="Editor__message-optional">(opcional)</span>
            </label>
            <input
              className="Editor__message-input input"
              type="text"
              id="message"
              name="message"
              placeholder="¿Por qué es un buen día?"
              onChange={handleChangeMessage}
            />
          </fieldset>
        ) : null}
        <fieldset className="Editor__action">
          {!date || !mood ? (
            <button className="Editor__action-btn save-btn">Guardar</button>
          ) : (
            <Link to="/">
              <button
                className="Editor__action-btn save-btn"
                type="submit"
                onClick={handleSubmitBtn}
              >
                Guardar
              </button>
            </Link>
          )}
          <Link to="/">
            <button
              className="Editor__action-btn cancel-btn"
              onClick={handleClearClick}
            >
              Cancelar
            </button>
          </Link>
        </fieldset>
      </div>
    </form>
  );
};

export default Editor;
