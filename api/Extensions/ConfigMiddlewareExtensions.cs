public static class ConfigMiddlewareExtensions
{
    public static IApplicationBuilder UseConfigMiddleware(
        this IApplicationBuilder app)
    {
        return app.UseMiddleware<ConfigMiddleware>();
    }
}
