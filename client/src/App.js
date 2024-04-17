const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список контактов</h1>
        </div>

        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Имя контакта</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <th>Имя фамилия 1</th>
                <th>example@email1.ru</th>
              </tr>

              <tr>
                <th>2</th>
                <th>Имя фамилия 2</th>
                <th>example@email2.ru</th>
              </tr>

              <tr>
                <th>3</th>
                <th>Имя фамилия 3</th>
                <th>example@email3.ru</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
