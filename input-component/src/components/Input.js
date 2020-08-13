import React from "react";
import PropTypes from "prop-types";
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
  row,
  label,
}) {
  const className = [
    error && "error",
    `size--${size}`,
    fullWidth && "fullWidth",
  ]
    .filter((e) => e)
    .join(" ");

  const props = {
    name,
    placeholder,
    value,
    className,
    disabled,
    rows: row,
  };

  return (
    <div className="input-container">
      {label && <label for="text">{label}</label>}
      <div className="input-area">
        {startIcon && (
          <i className="material-icons icon--startIcon">{startIcon}</i>
        )}
        {row ? (
          <textarea id="text" {...props}>
            {value}
          </textarea>
        ) : (
          <input id="text" type="text" {...props}></input>
        )}
        {endIcon && <i className="material-icons icon--endIcon">{endIcon}</i>}
      </div>
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  row: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  name: "text",
  size: "md",
};

export default Input;
