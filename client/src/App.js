import TableContact from "./layout/TableContact/TableContact";

const contacts = [
  { id: 1, name: 'Имя Фамилия 1', email: "q@e1.rt" },
  { id: 2, name: 'Имя Фамилия 2', email: "q@e2.rt" },
  { id: 3, name: 'Имя Фамилия 3', email: "q@e3.rt" },
];

const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <TableContact contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
