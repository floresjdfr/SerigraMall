using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace Serigramall.API.Models
{
    public enum InventaryState
    {
        ACTIVE, SOLDOUT, DESCONTINUED, DEFAULT, NEW
    }
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Description { get; set; }
        public string Provider { get; set; }
        public string ProductName { get; set; }
        public string BasePrice { get; set; }
        public string BaseTax { get; set; }
        public string ProductType { get; set; }
        public byte[] Image { get; set; }
        public List<string> Costumizations { get; set; }
        public DateTime RegistryDate { get; set; }
        public string ProductState { get; set; }
    }
}