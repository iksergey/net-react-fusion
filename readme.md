### Описание API
**Базовый url**: `http://localhost:5000/api/ContactManagement`

**Метод:** `GET`  
**URL:** `baseurl/contacts`  
**Описание:** Получает список всех контактов.  
**Возвращаемые данные:** Список контактов в формате JSON.
```json
[
  {
    "id": 1,
    "name": "Полное имя 2",
    "email": "7173a_2@ksergey.ru"
  },
  ... ... ...
  {
    "id": 100,
    "name": "Полное имя 4",
    "email": "60022_4@ksergey.ru"
  }
]
```

### Удаление контакта
**Метод:** `DELETE`  
**URL:** `baseurl/contacts/{id}`  
**Параметры пути:** `{id}` - идентификатор контакта, который нужно удалить.  
**Описание:** Удаляет контакт с указанным идентификатором.  

### Обновление контакта
**Метод:** `PUT`  
**URL:** `baseurl/contacts/{id}`  
**Параметры пути:** `{id}` - идентификатор контакта, который нужно обновить.  
**Описание:** Обновляет информацию о контакте с указанным идентификатором.  
**Тело запроса:** JSON-объект с обновленными данными контакта в следующем формате:
```json
{
  "name": "string",
  "email": "string"
}
```

### Добавление контакта
**Метод:** `POST`  
**URL:** `baseurl/contacts`  
**Описание:** Добавляет новый контакт.  
**Тело запроса:** JSON-объект с данными нового контакта в следующем формате:
```json
{
  "name": "string",
  "email": "string"
}
```

### EF Core

[Документация EF Core](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)

1 **Глобальная установка `dotnet-ef`**: Откройте командную строку или терминал и выполните команду:
   ```bash
   dotnet tool install --global dotnet-ef
   ```
2. **Обновление `dotnet-ef`**: Для обновления инструмента `dotnet-ef` до последней версии выполните команду:
   ```bash
   dotnet tool update --global dotnet-ef
   ```
   Эта команда проверит наличие обновлений для `dotnet-ef` и обновит его до последней доступной версии.

### Библиотеки, необходимые для начала работы с SQLite по средствам EF Core

1. `dotnet add package Microsoft.EntityFrameworkCore.Sqlite`
   - позволяет использовать SQLite в качестве базы данных для EF Core.
2. `dotnet add package Microsoft.EntityFrameworkCore`
   - Содержит основные функции и API EF Core для работы с различными типами баз данных.
3. `dotnet add package Microsoft.EntityFrameworkCore.Design`
   - Необходим для создания и работы с миграциями EF Core из командной строки.

### Работа с миграциями

Миграции в EF Core представляют собой способ управления изменениями в структуре базы данных с помощью кода.

- `dotnet ef migrations add InitialCreate`: создает новую миграцию с именем "InitialCreate". 

- `dotnet ef database update`: применяет все ожидающие миграции к базе данных, что означает, что изменения, описанные в последней созданной миграции с помощью `dotnet ef migrations add ...`, будут применены к базе данных.

### Маршрутизация в React-приложении

```bash
npm install react-router-dom
```

`react-router-dom` — это библиотека, которая предоставляет инструменты для маршрутизации в приложениях на React. 

1. **Создание маршрутов**: Позволяет определять, какие компоненты должны отображаться на различных URL-адресах.
2. **Навигация**: Включает компоненты и функции для навигации между страницами, такие как `<Link>`, `<NavLink>`, и программная навигация с помощью хука `useHistory`.
3. **Динамические маршруты**: Поддерживает параметры маршрута для создания динамических путей.
4. **Защищенные маршруты**: Можно создать маршруты, доступные только авторизованным пользователям.

### Пагинация

Полезные ссылки
- [bootstrap components](https://getbootstrap.com/docs/5.0/components/pagination/)
- [bootstrap docs](https://getbootstrap.com/docs/5.3/migration/#pagination)
- [bootstrap examples](https://getbootstrap.com/docs/5.3/examples/)

### Middleware pipeline 

- [ASP.NET Core Middleware docs](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware/?tabs=aspnetcore2x&view=aspnetcore-8.0)
- [HTTP Pipelines docs](https://learn.microsoft.com/en-us/archive/msdn-magazine/2002/september/asp-net-request-processing-filtering-and-content-redirection)
- [.net MVC 3 Request event so](https://stackoverflow.com/questions/4630209/net-mvc-3-request-event)
- [Global Error Handling in ASP.NET Core 8 medium](https://medium.com/@MilanJovanovicTech/global-error-handling-in-asp-net-core-8-22e30dadc1fe)

### Docker

- `docker build -t full-contact . --no-cache` создания Docker-образа, ` --no-cache` не использовать кэш от предыдущих сборок
- `docker run -d -p 8001:5000 full-contact --name app-contact-1` создает и запускает новый контейнер в фоновом режиме на основе образа "full-contact", связывает порт 8001 хоста с портом 5000 контейнера и присваивает контейнеру имя "app-contact-1".
- `docker tag full-contact iksergey/full-contact:latest` создает новый тег для существующего Docker-образа
- `docker push iksergey/full-contact:latest` отправляет локальный Docker-образ в удаленный репозиторий
- `docker run -d -p 8001:5000 iksergey/full-contact:latest --name app-contact-1` создает и запускает новый контейнер после pull

```json
"Logging": {
    "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Information"
    }
},
"ConnectionStrings": {
    "SqliteStringConnection": "Data Source=contacts.db"
},
"client": "http://localhost:3000"
```
