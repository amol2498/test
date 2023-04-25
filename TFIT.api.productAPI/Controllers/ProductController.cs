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
            new Product(){productId = 2, productName = "Garden Cart", productCode = "GDN-0023",releaseDate = "March 18, 2021",description = "15 gallon capacity rolling garden cart", price= 32.99,starRating= 4.2, imageUrl = "./assets/images/garden_cart.png"},
            new Product(){productId = 3, productName = "Hammer", productCode = "TXN-0145",releaseDate = "April 18, 2022",description = "Curved claw steel hammer", price= 54.99,starRating= 4.8, imageUrl = "./assets/images//hammer.png.png"},
            new Product(){productId = 4, productName = "Saw", productCode = "AGN-0093",releaseDate = "May 18, 2021",description = "15-inch steel blade hand saw", price= 50.99,starRating= 3.0, imageUrl = "./assets/images/saw.png"},
            new Product(){productId = 5, productName = "Video Game Controller", productCode = "HHV-0025",releaseDate = "June 18, 2021",description = "15Standard two-button video game controller", price= 45.99,starRating= 2.2, imageUrl = "./assets/images/xbox-controller.png"}
        };
        
        return products;   
    }
}
