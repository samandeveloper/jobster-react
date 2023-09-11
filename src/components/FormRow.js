//we use this file for dashboard>profile page>all the inputs in profile page- for not repeating the inputs
//we add all the inputs in this components so in those pages instead of hardcoding we add props
//pass the names we want as arguments to the function
//labelText argument is what we write inside the label
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {/* if the labelText exists publish that if not show the name instead */}
        {labelText || name}
      </label>
      <input
        id={name} //Note: this id must be the same as htmlFor in the above label
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
