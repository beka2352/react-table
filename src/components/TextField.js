import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  name,
  placeholder,
  value,
  label,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="form__field">
      {label && <div className="form__label">{label}</div> }
      <input
        type={type}
        className="inpt"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form__info form__info_message">{info}</small>}
    </div>
  );
};



TextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text'
};

export default TextField;
