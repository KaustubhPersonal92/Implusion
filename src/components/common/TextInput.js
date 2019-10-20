import React, {PropTypes} from 'react';

const TextInput = ({id,name, label, onChange,onSelect, disabled, placeholder, type, value, error, maxLength}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <input
        id = {id}
        name={name}
        className="form-control"
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
        onChange={onChange}
        onSelect = {onSelect}
        maxLength={maxLength}
      />
      {error && <div className="help-block">{error}</div>}
    </div>
  );
};

export default TextInput;