using PruebaTecnicaCarsales.BFF.Services;

var builder = WebApplication.CreateBuilder(args);
// Agrega la política CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


builder.Services.AddControllers();
builder.Services.AddHttpClient<EpisodesServices>();

var app = builder.Build();

// Usa la política CORS
app.UseCors("AllowAngular");


//app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();