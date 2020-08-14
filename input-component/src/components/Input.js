import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isFocus: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
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
    const inputClass = [
      size === "sm" && styles["size--sm"],
      size === "md" && styles["size--md"],
      fullWidth && styles.fullWidth,
    ]
      .filter((e) => e)
      .join(" ");

    const inputProps = {
      name,
      placeholder,
      value: this.state.value,
      className: inputClass,
      disabled,
      rows: row,
    };

    return (
      <div
        className={[
          styles["input-container"],
          error && styles.error,
          disabled && styles.disabled,
          this.state.isFocus && styles.focus,
        ]
          .filter((e) => e)
          .join(" ")}
      >
        {label && <label htmlFor="text">{label}</label>}
        <div className={styles["input-area"]}>
          {startIcon && (
            <i
              className={[
                "material-icons",
                styles["material-icons"],
                styles["icon--startIcon"],
              ].join(" ")}
            >
              {startIcon}
            </i>
          )}
          {row ? (
            <textarea
              id="text"
              {...inputProps}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleFocus}
            ></textarea>
          ) : (
            <input
              id="text"
              type="text"
              {...inputProps}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleFocus}
            ></input>
          )}
          {endIcon && (
            <i
              className={[
                "material-icons",
                styles["material-icons"],
                styles["icon--endIcon"],
              ].join(" ")}
            >
              {endIcon}
            </i>
          )}
        </div>
        {helperText && (
          <span className={styles["helper-text"]}>{helperText}</span>
        )}
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
