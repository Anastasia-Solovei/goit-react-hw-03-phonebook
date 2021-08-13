import React from 'react';
import PropTypes from 'prop-types';

import './ContactItem.scss';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="ContactItem">
      <p className="ContactItemText">
        {name}: {number}
      </p>

      <button
        className="DeleteBtn"
        id={id}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
