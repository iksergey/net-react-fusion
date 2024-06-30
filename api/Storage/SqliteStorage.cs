using Microsoft.Data.Sqlite;

public class SqliteStorage : IStorage
{
    private string connectionString;

    public SqliteStorage(string connectionString)
    {
        this.connectionString = connectionString;
    }

    public bool Add(Contact contact)
    {
        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        string sql = "INSERT INTO contacts(name, email) VALUES (@name, @email);";
        command.CommandText = sql;
        command.Parameters.AddWithValue("@name", contact.Name);
        command.Parameters.AddWithValue("@email", contact.Email);

        return command.ExecuteNonQuery() > 0;
    }

    public List<Contact> GetContacts()
    {
        var contact = new List<Contact>();

        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        command.CommandText = "SELECT * FROM contacts";

        using var reader = command.ExecuteReader();
        while (reader.Read())
        {
            contact.Add(new Contact()
            {
                Id = reader.GetInt32(0),
                Name = reader.GetString(1),
                Email = reader.GetString(2)
            });
        }
        return contact;
    }

    public bool Remove(int id)
    {
        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();
        command.CommandText = "DELETE FROM contacts WHERE id = @id";
        command.Parameters.AddWithValue("@id", id);

        return command.ExecuteNonQuery() > 0;
    }

    public bool UpdateContact(ContactDto contactDto, int id)
    {
        using var connection = new SqliteConnection(connectionString);
        connection.Open();

        var command = connection.CreateCommand();

        command.CommandText = @"
            UPDATE contacts
            SET name = @name, email = @email
            WHERE id = @id;
        ";

        command.Parameters.AddWithValue("@name", contactDto.Name);
        command.Parameters.AddWithValue("@email", contactDto.Email);
        command.Parameters.AddWithValue("@id", id);

        return command.ExecuteNonQuery() > 0;
    }
}