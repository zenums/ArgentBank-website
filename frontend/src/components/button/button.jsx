import "./button.css";

export default function Button({children, variant, ...rest }) {
  let classVariant;

  switch (variant) {
    case "primary":
      classVariant = "primary";
      break;
    case "tertiary":
      classVariant = "tertiary";
      break;
    default:
      classVariant = "primary";
      break;
  }

  return (
    <button
      className={`button ${classVariant}`}
      {...rest}
    >
      {children}
    </button>
  );
}
