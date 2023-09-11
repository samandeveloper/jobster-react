//this file is for the dashboard>add jobs>stats input and job type input-for not repeating the inputs
const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  //list is the statusOptions and handleChange is instead of the handleJobInput
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value} //this is the default value in the status (jobSlice.js>initialState>status property)
        onChange={handleChange}
        className="form-select"
      >
        {/* we should iterate over array of options that we already have in jobSlice.js file> initialState>statusOptions array*/}
        {list.map((itemValue, index) => {
          //itemValue is each item in the array
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
