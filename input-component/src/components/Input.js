import React from "react";
import "./Input.css";

function Input({
  name,
  placeholder,
  value,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiline,
  row,
  label,
}) {
  const className = [
    error ? "error" : "",
    `size--${size}`,
    fullWidth ? "fullWidth" : "",
  ]
    .filter((e) => e)
    .join(" ");
  return (
    <div className="input-container">
      {label ? <label for="input">{label}</label> : ""}
      <div className="input-area">
        {startIcon ? (
          <i className="material-icons icon--startIcon">{startIcon}</i>
        ) : (
          ""
        )}
        {multiline && row ? (
          <textarea
            name={name}
            id="input"
            placeholder={placeholder}
            rows={row}
            className={className}
            disabled={disabled}
          >
            {value}
          </textarea>
        ) : (
          <input
            type="text"
            name={name}
            id="input"
            placeholder={placeholder}
            value={value}
            className={className}
            disabled={disabled}
          ></input>
        )}
        {endIcon ? (
          <i className="material-icons icon--endIcon">{endIcon}</i>
        ) : (
          ""
        )}
      </div>
      {helperText ? <span className="helper-text">{helperText}</span> : ""}
    </div>
  );
}

export default Input;
