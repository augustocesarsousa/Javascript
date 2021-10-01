import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChance, newTesk }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input
        onChange={handleChance}
        type="text"
        value={newTesk}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChance: PropTypes.func.isRequired,
  newTesk: PropTypes.string.isRequired,
};
