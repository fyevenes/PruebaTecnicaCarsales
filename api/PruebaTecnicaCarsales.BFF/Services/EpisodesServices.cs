using System.Net.Http;
using System.Text.Json;
using PruebaTecnicaCarsales.BFF.Models;

namespace PruebaTecnicaCarsales.BFF.Services
{
    public class EpisodesServices
    {
        private readonly HttpClient _httpClient;

        public EpisodesServices(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _httpClient.BaseAddress = new Uri(config["RickAndMortyApi:BaseUrl"]!);
        }

        public async Task<EpisodeResponse?> GetEpisodesAsync(int page = 1)
        {
            var response = await _httpClient.GetAsync($"episode?page={page}");
            if (!response.IsSuccessStatusCode) return null;

            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<EpisodeResponse>(content,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
        }
    }
}