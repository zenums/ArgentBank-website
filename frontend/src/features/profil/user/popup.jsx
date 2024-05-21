import Popup from "../../../components/popup/popup";
import EditUsername from "./editUsername";

export default function popup({ setShowPopup}) {
  
  return (
    <Popup setShowPopup={setShowPopup}>
      <h2>Edit Username</h2>
      <EditUsername />
    </Popup>
  );
}
