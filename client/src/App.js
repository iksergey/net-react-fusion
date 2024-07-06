import axios from 'axios';
import React, { useState, useEffect } from "react";
import TableContact from "./layout/TableContact/TableContact";
import FormContact from "./layout/FormContact/FormContact";
import { Route, Routes } from 'react-router-dom';
import ContactDetails from './layout/ContactDetails/ContactDetails';

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
        const item = {
            name: contactName,
            email: contactEmail
        };

        const url = `${baseApiUrl}/contacts`;
        axios.post(url, item).then(
            response => setContacts([...contacts, response.data])
        );
    }

    const deleteContact = (id) => {
        const url = `${baseApiUrl}/contacts/${id}`;
        axios.delete(url);
        setContacts(contacts.filter(item => item.id !== id));
    }

    return (
        <div className="container mt-5">
            <Routes>
                <Route path="/" element={
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
                } />
                <Route path="contact/:id" element={<ContactDetails />} />
            </Routes>
        </div>
    );
}

export default App;
