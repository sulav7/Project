import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "../read/style.css";
import ReadOnlyRow from "./ReadOnlyRow";
import Editablerow from "./Editablerow";
export default function Read() {
  const [apiData, setApiData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    // name: "",
    phone: "",
    username: "",
    email: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullname: addFormData.name,
      phone: addFormData.phone,
      username: addFormData.username,
      email: addFormData.email,
    };
    const newContacts = [...apiData, newContact];
    setApiData(newContacts);
  };
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((getData) => {
      setApiData(getData.data);
    });
  }, []);
  return (
    <>
      <div className='app-container'>
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>phoneno</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          {apiData.map((contact) => (
            <tr>
              {/* <td>{contact.name}</td> */}
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <button>Delete</button>

                <button>Edit</button>

                <button>Read</button>
              </td>
            </tr>
          ))}
        </table>

        <form onSubmit={handleAddFormSubmit}>
          {/* <input
            type='text'
            name='name'
            placeholder='enter your full name'
            required
            onChange={handleAddFormChange}
          /> */}
          <input
            type='number'
            name='phone'
            placeholder='enter your phone no'
            required
            onChange={handleAddFormChange}
          />
          <input
            type='text'
            name='username'
            placeholder='enter your username'
            required
            onChange={handleAddFormChange}
          />
          <input
            type='email'
            name='email'
            placeholder='enter your email'
            required
            onChange={handleAddFormChange}
          />
          <button>Add Data</button>
        </form>
      </div>
    </>
  );
}
