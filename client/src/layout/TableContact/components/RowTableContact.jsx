import React from "react";
import { Link } from 'react-router-dom';
const RowTableContact = (props) => {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.email}</th>
            <th>
                <Link
                    to={`/contact/${props.id}`}
                    className="btn btn-primary btn-sm">
                    Подробнее
                </Link>
            </th>
        </tr >
    );
}

export default RowTableContact;
