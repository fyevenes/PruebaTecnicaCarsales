using Microsoft.AspNetCore.Mvc;
using PruebaTecnicaCarsales.BFF.Services;

namespace PruebaTecnicaCarsales.BFF.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EpisodesController : ControllerBase
    {
        private readonly EpisodesServices _service;

        public EpisodesController(EpisodesServices service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetEpisodes([FromQuery] int page = 1)
        {
            var episodes = await _service.GetEpisodesAsync(page);
            if (episodes == null) return StatusCode(500, "Error al consumir la API externa");
            return Ok(episodes);
        }
    }
}