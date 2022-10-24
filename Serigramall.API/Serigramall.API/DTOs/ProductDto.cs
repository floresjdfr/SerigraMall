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
        public string ProviderID { get; set; }
        public string ProductName { get; set; }
        public string BasePrice { get; set; }
        public string BaseTax { get; set; }
        public string ProductType { get; set; }
        /*public string Image { get; set; }*/
        public byte[] Image { get; set; }
        
        public DateTime RegistryDate { get; set; }
        public InventaryState ProductState { get; set; }
    }
}
