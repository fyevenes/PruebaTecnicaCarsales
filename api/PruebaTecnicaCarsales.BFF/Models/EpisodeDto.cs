namespace PruebaTecnicaCarsales.BFF.Models
{
    public class EpisodeDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string AirDate { get; set; } = string.Empty;
        public string Episode { get; set; } = string.Empty;
    }

    public class EpisodeResponse
    {
        public Info Info { get; set; } = new Info();
        public List<EpisodeDto> Results { get; set; } = new();
    }

    public class Info
    {
        public int Count { get; set; }
        public int Pages { get; set; }
        public string? Next { get; set; }
        public string? Prev { get; set; }
    }
}