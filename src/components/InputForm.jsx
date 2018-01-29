import React from 'react';

const InputForm = ({ handleChange, handleSubmit, email, errorMsg }) => (
  <form
    className="email-form"
    onSubmit={handleSubmit}
  >
    <div className="validation-status">
      {errorMsg}
    </div>
    <input
      className="email-validation-input"
      placeholder="Enter email address"
      type="text"
      name="email"
      value={email}
      onChange={handleChange}
    />
    <button
      type="submit"
      className="validation-submit-button"
    >Verify</button>
  </form>
);

export default InputForm;