using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace TFIT.api.productAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public ProductController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetProducts")]
    public JsonResult Get()
    {
        List<Product> products = new List<Product>();
        return Json(products);   
    }
}
