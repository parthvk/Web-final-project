import React from "react";
import "./Popup.scss";

// Popup for sharing
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="innerpop">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
