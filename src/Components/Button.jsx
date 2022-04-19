import React from "react";

export default function Button({
  loading,
  children,
  onClick,
  className,
  style,
}) {
  if (loading)
    return (
      <button type="button" className={className} style={{ cursor: "wait" }}>
        <i className="fas fa-circle-notch fa-spin"></i>
      </button>
    );

  return (
    <button type="button" className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
