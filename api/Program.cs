var builder = WebApplication.CreateBuilder(args);
builder.Services.AddServiceCollection(builder.Configuration);

var app = builder.Build();
app.Services.AddCustomService(builder.Configuration);
app.UseSwagger();
app.UseSwaggerUI();

app.UseDefaultFiles();
app.UseStaticFiles();
app.MapFallbackToController("Index", "Fallback");

app.MapControllers();
app.UseCors("CorsPolicy");
app.Run();
