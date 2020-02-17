import React from 'react'
import PropTypes from 'prop-types';

import './CheckBox.css';

const CheckBox = props => {
    const { label, value, checked, name, onChange, disabled } = props;

    return (
        <>
            <div className="col-md-3">
                <label className="container">
                    <h1>{label}</h1>
                    <input 
                        type="checkbox"
                        name={name}
                        checked={checked}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        className="checkbox-input"
                    />
                    <span className="checkmark"
                        style={{ opacity: disabled ? '0.7' : '' }}
                    ></span>
                </label>
            </div>
        </>
    )
}

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default CheckBox
