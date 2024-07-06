public interface IPaginationStorage : IStorage
{
    Contact GetContactById(int id);
    (List<Contact>, int TotalCount) GetContacts(int pageNumber, int pageSize);
}
