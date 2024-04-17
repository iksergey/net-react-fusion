import React from "react";

const RowTableContact = (props) => {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.email}</th>
        </tr>
    );
}

export default RowTableContact;