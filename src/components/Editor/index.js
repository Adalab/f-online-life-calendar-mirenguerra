import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Editor = props => {
  const {
    handleChangeDate,
    handleChangeMood,
    mood,
    handleChangeMessage,
    handleCancelBtn,
    handleSubmitBtn
  } = props;
  let Editor__message = mood === ":)" ? null : "hidden-message";

  return (
    <form className="Editor">
      <fieldset className="Editor__dateInput">
        <label className="Editor__dateInput-label" htmlFor="date">
          Fecha
        </label>
        <input
          className="Editor__dateInput-input"
          type="date"
          id="date"
          name="date"
          placeholder="24/06/2019"
          onChange={handleChangeDate}
          required
        />
      </fieldset>
      <fieldset className="Editor__mood">
        <label className="Editor__mood-label" />
        <div className="Editor__mood-inputs">
          <label htmlFor="smile">
            <input
              className="Editor__mood-smiley"
              id="smile"
              type="radio"
              value=":)"
              name="mood"
              onChange={handleChangeMood}
            />
            :)
          </label>
          <label htmlFor="sad">
            <input
              className="Editor__mood-sad"
              id="sad"
              type="radio"
              value=":("
              name="mood"
              onChange={handleChangeMood}
            />
            :(
          </label>
        </div>
      </fieldset>
      <fieldset className={Editor__message}>
        <label className="Editor__message-label" htmlFor="message">
          Mensaje
        </label>
        <input
          className="Editor__message-input"
          type="text"
          id="message"
          name="message"
          placeholder="¿Por qué es un buen día?"
          onChange={handleChangeMessage}
        />
      </fieldset>
      <fieldset className="Editor__action">
        <button className="Editor__action-btn save-btn" type="submit" onClick={handleSubmitBtn}>
          Guardar
        </button>

        <button
          className="Editor__action-btn cancel-btn"
          onClick={handleCancelBtn}
        >
          Cancelar
        </button>

        <Link to="/">
          <button className="Editor__action-btn back-btn">Volver</button>
        </Link>
      </fieldset>
    </form>
  );
};

export default Editor;
