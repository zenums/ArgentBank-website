import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Button from "../../../components/button/button";
import Popup from "./popup";

export default function Username() {
  const [showPopup, setShowPopup] = useState(false);

  const user = useSelector((state) => state.user);
  const { firstname, lastname } = user;

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstname} {lastname}
      </h1>
      <Button variant="primary" onClick={() => setShowPopup(true)}>
        Edit Name
      </Button>{" "}
      {showPopup &&
        createPortal(<Popup setShowPopup={setShowPopup} />, document.body)}
    </div>
  );
}
