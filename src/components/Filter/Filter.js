import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import './Filter.scss';

const filterInputId = uuidv4();

const Filter = ({ value, onChange }) => {
  return (
    <div className="InputOverlay">
      <label htmlFor={filterInputId} className="FilterLabel">
        Find contacts by name
      </label>
      <input
        className="FilterInput"
        type="text"
        value={value}
        onChange={onChange}
        id={filterInputId}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
