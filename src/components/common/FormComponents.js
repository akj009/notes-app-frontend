import React, {PropTypes} from "react";

/*eslint-disable react/no-multi-comp */

export const TextInput = ({name, label, value, placeholder, onChange, errors, populated}) => {
  let inputWrapperClass = 'mdl-textfield mdl-js-textfield';
  if(errors && errors.length > 0) {
    inputWrapperClass += " " + 'has-error';
  }
  return (
    <div className={inputWrapperClass}>
      <label htmlFor={name}>{label}</label>
        <input
          type="text"
          name={name}
          className="mdl-textfield__input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={populated}
        />
        {errors && <div className="alert alert-danger">{errors}</div>}
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

export const TextAreaInput = ({name, label, value, placeholder, onChange, errors, populated}) => {
  let inputWrapperClass = 'mdl-textfield mdl-js-textfield';
  if(errors && errors.length > 0) {
    inputWrapperClass += " " + 'has-error';
  }
  return (
    <div className={inputWrapperClass}>
      <label htmlFor={name}>{label}</label>
        <textarea
          type="text"
          name={name}
          className="mdl-textfield__input"
          rows="4"
          value={value}
          onChange={onChange}
          disabled={populated}
        />
        {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  populated: PropTypes.bool
};
