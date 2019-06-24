import React from "react";
import "./styles.scss";

class Editor extends React.Component {
  render() {
    return (
      <div className="Editor">
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
          />
        </fieldset>
        <fieldset className="Editor__mood">
          <label className="Editor__mood-label" />
          <div className="Editor__mood-inputs">
            <label htmlFor="smile">
              <input
                className="Editor__mood-smiley"
                id="smile"
                type="checkbox"
                value=":)"
                name="smile"
              />
              :)
            </label>
            <label htmlFor="sad">
              <input
                className="Editor__mood-sad"
                id="sad"
                type="checkbox"
                value=":("
                name="sad"
              />
              :(
            </label>
          </div>
        </fieldset>
        <fieldset className="Editor__message">
          <label className="Editor__message-label" htmlFor="message">
            Mensaje
          </label>
          <input
            className="Editor__message-input"
            type="text"
            id="message"
            name="message"
            placeholder="¿Por qué es un buen día?"
          />
        </fieldset>
        <fieldset className="Editor__action">
          <button className="Editor__action-btn save-btn">Guardar</button>
          <button className="Editor__action-btn cancel-btn">Cancelar</button>
        </fieldset>
      </div>
    );
  }
}

export default Editor;
