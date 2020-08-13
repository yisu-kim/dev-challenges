import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus() {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  }

  render() {
    const {
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
    } = this.props;
    const inputClass = [`size--${size}`, fullWidth && "fullWidth"]
      .filter((e) => e)
      .join(" ");

    const inputProps = {
      name,
      placeholder,
      value,
      className: inputClass,
      disabled,
      rows: row,
    };

    return (
      <div
        className={[
          "input-container",
          error && "error",
          disabled && "disabled",
          this.state.isFocus && "focus",
        ]
          .filter((e) => e)
          .join(" ")}
      >
        {label && <label for="text">{label}</label>}
        <div className="input-area">
          {startIcon && (
            <i className="material-icons icon--startIcon">{startIcon}</i>
          )}
          {row ? (
            <textarea
              id="text"
              {...inputProps}
              onFocus={this.handleFocus}
              onBlur={this.handleFocus}
            >
              {value}
            </textarea>
          ) : (
            <input
              id="text"
              type="text"
              {...inputProps}
              onFocus={this.handleFocus}
              onBlur={this.handleFocus}
            ></input>
          )}
          {endIcon && <i className="material-icons icon--endIcon">{endIcon}</i>}
        </div>
        {helperText && <span className="helper-text">{helperText}</span>}
      </div>
    );
  }
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
