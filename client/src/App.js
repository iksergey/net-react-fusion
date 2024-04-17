import React, { useState } from "react";
import TableContact from "./layout/TableContact/TableContact";


const App = () => {
  const [contacts, setContacts] = useState(
    [
      { id: 21, name: 'Имя Фамилия 1', email: "q@e1.rt" },
      { id: 12, name: 'Имя Фамилия 2', email: "q@e2.rt" },
      { id: 6, name: 'Имя Фамилия 3', email: "q@e3.rt" },
    ]
  );

  const addContact = () => {
    const newId = Math.max(
      ...contacts.map(e => e.id)) + 1;

    console.log(newId);

    const item = {
      id: newId,
      name: 'Имя Фамилия 3',
      email: "q@e3.rt"
    };

    setContacts([...contacts, item]);
    console.log(contacts);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <TableContact contacts={contacts} />
          <div>
            <button
              className="btn btn-primary"
              onClick={() => { addContact() }}
            >
              Добавить контакт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
