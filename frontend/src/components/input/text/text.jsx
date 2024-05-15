import './text.css';

export default function text({ label, value, name, ...rest }) {

  return (
    <>
      <label htmlFor={name} className="label">{label}</label>
      <input name={name} type="text" value={value} {...rest}/>
    </>
  );
}
