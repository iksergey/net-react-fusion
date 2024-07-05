using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

public static class ApplicationServiceCollectionExtension
{
    public static IServiceCollection AddServiceCollection(
        this IServiceCollection services,
        ConfigurationManager configuration)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(opt =>
        {
            opt.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "API списка контактов",
            });
        });
        services.AddControllers();

        var stringConnection = configuration.GetConnectionString("SqliteStringConnection");
        services.AddDbContext<SqliteDbContext>(opt => opt.UseSqlite(stringConnection));
        services.AddScoped<IStorage, SqliteEfStorage>();
        services.AddScoped<IInitializer, SqliteEfFakerInitializer>();
        services.AddCors(opt =>
        opt.AddPolicy("CorsPolicy", policy =>
        {
            policy.AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins(configuration["client"]);
        }));

        return services;
    }
}
