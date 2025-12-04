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
            try
            {
            var response = await _service.GetEpisodesAsync(page);
            if (response == null) return StatusCode(500, "Error al consumir la API externa");
            return Ok(response);
            }
            catch (HttpRequestException ex)
            {
                return StatusCode(503, $"Error al consumir API externa: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno: {ex.Message}");
            }

        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchEpisodes([FromQuery] string query)
        {
           if (string.IsNullOrWhiteSpace(query)){ return BadRequest("Debe especificar un término de búsqueda.");}          
                try
                {
                    var response = await _service.SearchEpisodes(query);
                    if (response == null || response.Results == null || !response.Results.Any())
                        return NotFound($"No se encontraron episodios con el término '{query}'.");

                    return Ok(response);
                }
                catch (HttpRequestException ex)
                {
                    return StatusCode(503, $"Error al consumir API externa: {ex.Message}");
                }
                catch (Exception ex)
                {
                    return StatusCode(500, $"Error interno: {ex.Message}");
                }


        }


    }
}