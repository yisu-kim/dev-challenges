import React from "react";
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
  const className =
    (variant ? ` variant--${variant}` : "") +
    (disableShadow ? ` disableShadow` : "") +
    (size ? ` size--${size}` : " size--md") +
    (color ? ` color--${color}` : " color--default") +
    (startIcon ? ` icon icon--startIcon` : "") +
    (endIcon ? ` icon icon--endIcon` : "");
  return (
    <button className={className} disabled={disabled ? "disabled" : ""}>
      {startIcon ? <i className="material-icons">{startIcon}</i> : ""}
      {innerText ? innerText : "Default"}
      {endIcon ? <i className="material-icons">{endIcon}</i> : ""}
    </button>
  );
}

export default Button;
