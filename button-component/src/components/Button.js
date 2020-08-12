import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({
  disabled,
  variant,
  disableShadow,
  startIcon,
  endIcon,
  size,
  color,
  innerText,
}) {
  const className = [
    `size--${size}`,
    `color--${color}`,
    variant ? `variant--${variant}` : "",
    disableShadow ? `disableShadow` : "",
    startIcon || endIcon ? `icon` : "",
  ]
    .filter((e) => e)
    .join(" ");
  const iconClassName = [
    startIcon ? `material-icons icon--startIcon` : "",
    endIcon ? `material-icons icon--endIcon` : "",
  ]
    .filter((e) => e)
    .join(" ");
  return (
    <button className={className} disabled={disabled ? true : false}>
      {startIcon ? <i className={iconClassName}>{startIcon}</i> : ""}
      {innerText}
      {endIcon ? <i className={iconClassName}>{endIcon}</i> : ""}
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["outline", "text"]),
  disableShadow: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"])
    .isRequired,
  innerText: PropTypes.string,
};

Button.defaultProps = {
  size: "md",
  color: "default",
  innerText: "Default",
};

export default Button;
