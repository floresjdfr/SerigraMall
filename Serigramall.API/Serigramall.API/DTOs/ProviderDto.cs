using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serigramall.API.Models;

namespace Serigramall.API.DTOs
{
    public class ProviderDto
    {
        public string Id { get; set; }
        public UserDto User { get; set; }
        public string ProviderName { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public List<ProductDto> ProductList { get; set; }

    }
}
