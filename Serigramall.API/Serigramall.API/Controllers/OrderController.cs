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
    public class OrderController : ControllerBase
    {
        private readonly IRepository<Order> _orderRepository;

        public OrderController(OrderRepository orderService)
        {
            _orderRepository = orderService;
        }

        //Post : api/Product
        [HttpPost]
        public ActionResult<OrderDto> Post([FromBody] OrderDto value)
        {
            value.OrderDate = DateTime.Now;
            var newValue = _orderRepository.Create(value.toOrder()) as Order;

            return CreatedAtAction(nameof(Get), 
                new { providerId = newValue.Id.ToString() }, newValue.toDTO());
        }

        /// <summary>
        /// Returns a list of orders, depending on what parameters are introduced
        /// </summary>
        /// <param name="providerId">Used to return a list of products by provider</param>
        /// <param name="productType">Used to return a list of products by product type</param>
        /// <returns>List of products</returns>
        [HttpGet]
        public IEnumerable<OrderDto> Get([FromQuery]string providerId, [FromQuery] string userId)
        {
            IEnumerable<Order> orders = new List<Order>();

            if (!string.IsNullOrEmpty(providerId))
                orders = _orderRepository.GetByProvider(providerId);
            else if (!string.IsNullOrEmpty(userId))
                orders = _orderRepository.GetByUserId(userId);
            else
                orders = _orderRepository.Get();

            return orders.Select(item => (item as Order).toDTO());
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] OrderDto value) => _orderRepository.Update(id, value.toOrder());

        [HttpPut]
        public void Put([FromBody] OrderDto value) => _orderRepository.Update(value.toOrder());

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(string id) => _orderRepository.Remove(id);
    }
}
