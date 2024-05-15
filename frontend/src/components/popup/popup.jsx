import "./popup.css";

export default function popup({ children, setShowPopup, ...rest }) {
  return (
    <aside className="bg-popup">
      <div className="popup" {...rest}>
        <span className="close" onClick={() => setShowPopup(false)}>
          X
        </span>
        {children}
      </div>
    </aside>
  );
}
