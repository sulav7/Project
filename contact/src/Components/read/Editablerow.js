import React from "react";

const Editablerow = () => {
  return (
    <div>
      <tr>
        <td>
          {" "}
          <input
            type='number'
            name='phone'
            placeholder='enter your phone no'
            required
          />
        </td>
        <td>
          <input
            type='text'
            name='username'
            placeholder='enter your username'
            required
          />
        </td>
      </tr>
      <td>
        <input
          type='email'
          name='email'
          placeholder='enter your email'
          required
        />
      </td>
    </div>
  );
};

export default Editablerow;
