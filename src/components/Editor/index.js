import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Editor = props => {
  const {
    handleChangeDate,
    handleChangeMood,
    handleChangeMessage,
    handleClearClick,
    handleSubmitBtn,
    selectedMood
  } = props;

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
                checked={selectedMood.mood === ':)'}
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
                checked={selectedMood.mood === ':('}
              />
              :(
            </label>
          </div>
        </fieldset>

        {selectedMood.mood === ":)" ? (
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
          {selectedMood.errorMessage ? (
            <p className="Editor__action-error">Esa fecha ya tiene un estado asignado. Elige otra fecha.</p>
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
