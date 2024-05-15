import './password.css';

export default function Password({ label, value, name, ...rest }) {

  return (
    <>
      <label htmlFor={name} className="label">{label}</label>
      <input name={name} type="password" value={value} {...rest}/>
    </>
  );
}