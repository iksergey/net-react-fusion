import React from "react";
import RowTableContact from "./components/RowTableContact";

const TableContact = () => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Имя контакта</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                <RowTableContact />
                <RowTableContact />
                <RowTableContact />
                <RowTableContact />
                <RowTableContact />
            </tbody>
        </table>
    );
}

export default TableContact;