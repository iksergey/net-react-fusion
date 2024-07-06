import FormContact from "./FormContact";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppendContact = () => {
    const navigate = useNavigate();
    const baseApiUrl = process.env.REACT_APP_API_URL;

    const addContact = (contactName, contactEmail) => {
        const item = {
            name: contactName,
            email: contactEmail
        };

        let url = `${baseApiUrl}/contacts`;
        axios.post(url, item)
            .then(
                () => { navigate("/"); }
            );
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1>Добавить контакт</h1>
            </div>
            <div className="card-body">
                <FormContact addContact={addContact} />
            </div>
        </div>
    );
}

export default AppendContact;
