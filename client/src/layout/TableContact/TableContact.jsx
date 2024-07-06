import React from "react";
import RowTableContact from "./components/RowTableContact";

const TableContact = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Имя контакта</th>
                    <th>E-mail</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.contacts.map(
                        contact =>
                        (<RowTableContact
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            email={contact.email}
                        />)
                    )
                }

            </tbody>
        </table>
    );
}

export default TableContact;
