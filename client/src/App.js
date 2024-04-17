import axios from 'axios';
import React, { useState, useEffect } from "react";
import TableContact from "./layout/TableContact/TableContact";
import FormContact from "./layout/FormContact/FormContact";

const baseApiUrl = process.env.REACT_APP_API_URL;

const App = () => {
  const [contacts, setContacts] = useState([]);

  const url = `${baseApiUrl}/contacts`;
  useEffect(() => {
    axios.get(url).then(
      res => setContacts(res.data)
    );
  }, []);

  const addContact = (contactName, contactEmail) => {
    const newId = contacts.length === 0 ? 1 : Math.max(
      ...contacts.map(e => e.id)) + 1;

    const item = {
      id: newId,
      name: contactName,
      email: contactEmail
    };

    const url = `${baseApiUrl}/contacts`;
    axios.post(url, item);
    setContacts([...contacts, item]);
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(item => item.id !== id));
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <TableContact
            contacts={contacts}
            deleteContact={deleteContact}
          />
          <FormContact addContact={addContact} />

        </div>
      </div>
    </div>
  );
}

export default App;
