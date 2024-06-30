public class InMemoryStorage : IStorage
{
    private List<Contact> Contacts { get; set; }

    public InMemoryStorage()
    {
        this.Contacts = new List<Contact>()
        {
            new Contact { Id = 1, Name = "Сергей Камянецкий", Email = "i@ksergey.ru" },
            new Contact { Id = 2, Name = "Мария Петрова", Email = "maria@example.ru" },
            new Contact { Id = 3, Name = "Алексей Сидоров", Email = "alexey@example.ru" },
            new Contact { Id = 4, Name = "Екатерина Кузнецова", Email = "ekaterina@example.ru" },
            new Contact { Id = 5, Name = "Дмитрий Васильев", Email = "dmitry@example.ru" }
        };
    }

    public List<Contact> GetContacts()
    {
        return Contacts;
    }

    public Contact Add(Contact contact)
    {
        foreach (var item in Contacts)
        {
            if (contact.Id == item.Id)
            {
                return null;
            }
        }
        Contacts.Add(contact);
        return contact;
    }

    public bool Remove(int id)
    {
        Contact contact;
        for (int i = 0; i < Contacts.Count; i++)
        {
            if (this.Contacts[i].Id == id)
            {
                contact = Contacts[i];
                Contacts.Remove(contact);
                return true;
            }
        }
        return false;
    }

    public bool UpdateContact(ContactDto contactDto, int id)
    {
        Contact contact;
        for (int i = 0; i < Contacts.Count; i++)
        {
            if (Contacts[i].Id == id)
            {
                contact = Contacts[i];
                if (!String.IsNullOrEmpty(contactDto.Email))
                {
                    contact.Email = contactDto.Email;
                }
                if (!String.IsNullOrEmpty(contactDto.Name))
                {
                    contact.Name = contactDto.Name;
                }
                return true;
            }
        }
        return false;
    }
}
