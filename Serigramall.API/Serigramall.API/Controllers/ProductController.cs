﻿using Microsoft.AspNetCore.Http;
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
            return CreatedAtAction(nameof(Get), new { providerId = newValue.Id.ToString() }, newValue.toDTO());
        }

        // GET: api/Product
        [HttpGet("{providerId?}")]
        public IEnumerable<ProductDto> Get(string providerId)
        {
            var products = !string.IsNullOrEmpty(providerId) ? _productRepository.GetByProvider(providerId) : _productRepository.Get();
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
