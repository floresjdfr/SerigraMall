using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace Serigramall.API.DTOs
{
    public class OrderDto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Client { get; set; }
        public List<ProductBoughtDto> Products { get; set; }
        public string TotalPrice { get; set; }
        public string LastCardDigits { get; set; }
        public DateTime? OrderDate { get; set; }
        public string OrderState { get; set; }
    }
}
