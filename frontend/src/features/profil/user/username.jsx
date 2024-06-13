import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Button from "../../../components/button/button";
import Popup from "./popup";

export default function Username({ profil }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {profil.firstName} {profil.lastName}
      </h1>
      <Button variant="primary" onClick={() => setShowPopup(true)}>
        Edit Username
      </Button>
      {showPopup &&
        createPortal(<Popup setShowPopup={setShowPopup} />, document.body)}
    </div>
  );
}
