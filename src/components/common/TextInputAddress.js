import React, {PropTypes} from 'react';

const TextInputAddress = ({id,name, onChange , placeholder, type, value, error, onBlur}) => {
  let wrapperClass = 'xgroup';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <input
        id = {id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <div className="help-block">{error}</div>}
    </div>
  );
};

export default TextInputAddress;