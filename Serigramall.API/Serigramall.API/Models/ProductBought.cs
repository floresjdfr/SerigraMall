using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace Serigramall.API.Models
{
    public class ProductBought
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Quantity { get; set; }
        public string ProductID { get; set; }
        public string SerigraphyID { get; set; }
    }
}