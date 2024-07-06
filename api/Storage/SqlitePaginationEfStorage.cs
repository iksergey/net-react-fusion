
public class SqlitePaginationEfStorage : SqliteEfStorage, IPaginationStorage
{
    public SqlitePaginationEfStorage(SqliteDbContext context)
        : base(context)
    {
    }

    public Contact GetContactById(int id)
    {
        return base.context.Contacts.Find(id);
    }

    public (List<Contact>, int TotalCount) GetContacts(int pageNumber, int pageSize)
    {
        int total = base.context.Contacts.Count();
        List<Contact> contacts = base.context.Contacts
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToList();
        return (contacts, total);
    }
}
