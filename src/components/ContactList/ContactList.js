import React from 'react';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts &&
        contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
