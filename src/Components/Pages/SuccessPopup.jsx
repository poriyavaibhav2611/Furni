import React from "react";

export default function SuccessPopup({ show, onClose, message }) {
  if (!show) return null;

  return (
    <div
      className="alert alert-success alert-dismissible fade show position-fixed top-0 end-0 m-3"
      role="alert"
      style={{ zIndex: 9999 }}
    >
      <strong></strong> {message}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
}
