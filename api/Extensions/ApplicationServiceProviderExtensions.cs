public static class ApplicationServiceProviderExtensions
{
    public static IServiceProvider AddCustomService(
        this IServiceProvider services,
        IConfiguration configuration
    )
    {
        using var scope = services.CreateScope();

        var storage = scope.ServiceProvider.GetService<IStorage>();
        var dbStorage = storage as SqliteStorage;
        if (dbStorage != null)
        {
            string cs = configuration.GetConnectionString("SqliteStringConnection");
            new FakerInitializer(cs).Initialize();
        }

        return services;
    }
}