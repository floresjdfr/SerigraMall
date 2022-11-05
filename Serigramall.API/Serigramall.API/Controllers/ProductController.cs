using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serigramall.API.DTOs;
using Serigramall.API.Models;
using Serigramall.API.Repositories;
using Serigramall.API.Extensions;
using System.Collections.Generic;
using System.Linq;
using System;

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

        //Post : api/Product
        [HttpPost]
        public ActionResult<ProductDto> Post([FromBody] ProductDto value)
        {
            value.RegistryDate = DateTime.Now;
            var newValue = _productRepository.Create(value.toProduct()) as Product;

            return CreatedAtAction(nameof(Get), 
                new { providerId = newValue.Id.ToString() }, newValue.toDTO());
        }

        /// <summary>
        /// Returns a list of products, depending on what parameters are introduced
        /// </summary>
        /// <param name="providerId">Used to return a list of products by provider</param>
        /// <param name="productType">Used to return a list of products by product type</param>
        /// <returns>List of products</returns>
        [HttpGet]
        public IEnumerable<ProductDto> Get([FromQuery]string providerId, [FromQuery] string productType)
        {
            IEnumerable<Product> products = new List<Product>();

            if (!string.IsNullOrEmpty(providerId))
                products = _productRepository.GetByProvider(providerId);
            else if (!string.IsNullOrEmpty(productType))
                products = _productRepository.GetByProductType(productType);
            else
                products = _productRepository.Get();

            return products.Select(item => (item as Product).toDTO());
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] ProductDto value) => _productRepository.Update(id, value.toProduct());

        [HttpPut]
        public void Put([FromBody] ProductDto value) => _productRepository.Update(value.toProduct());

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(string id) => _productRepository.Remove(id);
    }
}
