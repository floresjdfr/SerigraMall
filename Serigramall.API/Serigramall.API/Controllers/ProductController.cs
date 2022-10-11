using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serigramall.API.DTOs;
using Serigramall.API.Models;
using Serigramall.API.Repositories;
using Serigramall.API.Extensions;
using System.Collections.Generic;
using System.Linq;

namespace Serigramall.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly IRepository<Product> _productRepository;

        public ProductController(ProductRepository productService)
        {
            _productRepository = productService;
        }

        //Post : api/ProductController
        [HttpPost]
        public ActionResult<ProductDto> Post([FromBody] ProductDto value)
        {
            var newValue = _productRepository.Create(value.toProduct()) as Product;
            return CreatedAtAction(nameof(Get), new { id = newValue.Id.ToString() }, newValue.toDTO());
        }



        // GET: api/ProductController
        [HttpGet]
        public IEnumerable<ProductDto> Get() => _productRepository.Get().Select(item => (item as Product).toDTO());

    }
}
