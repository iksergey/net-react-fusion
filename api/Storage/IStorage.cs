public interface IStorage
{
    List<Contact> GetContacts();
    Contact Add(Contact contact);
    bool Remove(int id);
    bool UpdateContact(ContactDto contactDto, int id);
}
