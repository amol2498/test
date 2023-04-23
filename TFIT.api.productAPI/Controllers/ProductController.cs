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
    [Route("GetProducts")]
    public IEnumerable<Product> getProducta()
    {
        List<Product> products = new List<Product>()
        {
            new Product(){productId = 1, productName = "Leaf Rake", productCode = "GDN-0011",releaseDate = "March 19, 2021",description = "Leaf rake with 48-inch wooden handle.", price= 19.95,starRating= 3.2, imageUrl = "./assets/images/leaf_rake.png"},
            new Product(){productId = 2, productName = "Garden Cart", productCode = "GDN-0023",releaseDate = "March 18, 2021",description = "15 gallon capacity rolling garden cart", price= 32.99,starRating= 4.2, imageUrl = "./assets/images/garden_cart.png"}
        };
        
        return products;   
    }
}
