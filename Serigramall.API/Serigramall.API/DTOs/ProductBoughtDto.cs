using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;
using Serigramall.API.Models;

namespace Serigramall.API.DTOs
{
    public class ProductBoughtDto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string ProductName { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public string Quantity { get; set; }
        public decimal BasePrice {get; set; }
        public decimal BaseTax { get; set; }
        public InventaryState ProductState { get; set; }
        public string ProviderId { get; set; }
        public ProductBoughtDto? Serigraphy { get; set; }
    }
}
