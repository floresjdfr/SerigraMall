using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Serigramall.API.Models;

namespace Serigramall.API.DTOs
{
    public class ProductDto
    {
        public string Id { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public string State { get; set; }
    }
}
