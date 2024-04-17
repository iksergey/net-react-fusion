import React, { useState } from "react";

const FormContact = (props) => {

    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const submit = () => {
        if (contactName === "" || contactEmail === "") return;
        props.addContact(contactName, contactEmail);
    }

    return (
        <div>
            <div className="mb-3">
                <form >
                    <div className="mb-3">
                        <label className="form-label">Введите имя:</label>
                        <input className="form-control" type="text"
                            onChange={(e) => { setContactName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Введите e-mail:</label>
                        <textarea
                            className="form-control"
                            onChange={(e) => { setContactEmail(e.target.value) }}
                            rows={1}>
                        </textarea>
                    </div>
                </form>
            </div>

            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => { submit() }}
                >
                    Добавить контакт
                </button>
            </div>
        </div>
    );
}

export default FormContact;