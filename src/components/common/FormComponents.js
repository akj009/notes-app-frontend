import React, {PropTypes} from "react";

export const TextInput = ({name, label, value, placeholder, onChange, errors, populated}) => {
  let inputWrapperClass = 'form-group';
  if(errors && errors.length > 0) {
    inputWrapperClass += " " + 'has-error';
  }
  return (
    <div className={inputWrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className={"form-control"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={populated}
        />
        {errors && <div className="alert alert-danger">{errors}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  populated: PropTypes.bool
};
