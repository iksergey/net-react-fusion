public class ConfigMiddleware
{
    private readonly RequestDelegate next;

    public ConfigMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Path == "/config.js")
        {
            var scheme = context.Request.Scheme;
            var host = context.Request.Host.Value;
            var pathBase = context.Request.PathBase.Value;

            var apiUrl = $"{scheme}://{host}{pathBase}/api/ContactManagement";

            var config = $@"window.config = {{
                apiUrl: '{apiUrl}'
            }};";

            context.Response.ContentType = "application/javascript";
            await context.Response.WriteAsync(config);
        }
        else
        {
            await this.next(context);
        }
    }
}
