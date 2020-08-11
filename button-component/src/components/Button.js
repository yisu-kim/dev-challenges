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
    (startIcon || endIcon ? ` icon` : "");
  const iconClassName =
    (startIcon ? ` material-icons icon--startIcon` : "") +
    (endIcon ? ` material-icons icon--endIcon` : "");
  return (
    <button className={className} disabled={disabled ? "disabled" : ""}>
      {startIcon ? <i className={iconClassName}>{startIcon}</i> : ""}
      {innerText ? innerText : "Default"}
      {endIcon ? <i className={iconClassName}>{endIcon}</i> : ""}
    </button>
  );
}

export default Button;
