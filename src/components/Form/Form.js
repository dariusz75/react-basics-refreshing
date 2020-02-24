import React from 'react';

const Form = ({ submitFn }) => (
  <form onSubmit={submitFn}>
    <input placeholder="Name" name="name" />
    <input placeholder="Link" name="link" />
    <input placeholder="Image" name="image" />
    <textarea placeholder="Description" name="description" />
    <button type="submit">Add new item</button>
  </form>
);

export default Form;