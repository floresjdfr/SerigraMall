
using MongoDB.Driver;
using Serigramall.API.Models;
using Serigramall.API.Settings;
using System;
using System.Collections.Generic;
using System.IO.Packaging;

namespace Serigramall.API.Repositories
{
    public class ProductRepository : IRepository<Product>
    {
        private readonly IMongoCollection<Product> _items;

        public ProductRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _items = database.GetCollection<Product>("Products");
        }

        public Product Create(Product item)
        {
            var newItem = (Product)item;
            _items.InsertOne(newItem);
            return newItem;
        }
        public IEnumerable<Product> Get() => _items.Find(item => true).ToList();

        public Product Get(string id) => _items.Find(item => item.Id == id).FirstOrDefault();

        public IEnumerable<Product> GetByProvider(string providerId) => _items.Find(item => item.Provider == providerId).ToList();
        public IEnumerable<Product> GetByProductType(string productType)
        {
            IEnumerable<Product> productsList = new List<Product>();

            if (productType == "1")
                productsList = _items.Find(item => item.ProductType == "SERIGRAPHY").ToList();
            if (productType == "2")
                productsList = _items.Find(item => item.ProductType == "PRODUCT").ToList();
            
            return productsList;
        }

        public void Remove(string id) => _items.DeleteOne(item => item.Id == id);

        public void Remove(Product itemToDelete)
        {
            throw new System.NotImplementedException();
        }

        public void Update(string id, Product updatedValue)
        {
            var task = (Product)updatedValue;
            _items.ReplaceOne(task => task.Id == id, task);
        }
        public void Update(Product updatedValue)
        {
            var updatedItem = (Product)updatedValue;
            var filter = Builders<Product>.Filter.Where(product => product.Id == updatedItem.Id);
            var update = Builders<Product>.Update
                .Set(product => product.ProductName, updatedItem.ProductName)
                .Set(product => product.Description, updatedItem.Description)
                .Set(product => product.BasePrice, updatedItem.BasePrice)
                .Set(product => product.BaseTax, updatedItem.BaseTax)
                .Set(product => product.ProductState, updatedItem.ProductState)
                .Set(product => product.Image, updatedItem.Image);
            var options = new FindOneAndUpdateOptions<Product>();
            _items.FindOneAndUpdate(filter, update, options);
        }

        public IEnumerable<Product> GetByUserId(string userId)
        {
            throw new NotImplementedException();
        }
    }
}


/**
public IEnumerable<Task> Get() => _tasks.Find(task => true).ToList();
public Task Get(string id) => _tasks.Find(task => task.Id == id).FirstOrDefault();
public Task Create(Task value)
{
    var newTask = (Task)value;
    _tasks.InsertOne(newTask);
    return newTask;
}
public void Update(string id, Task value)
{
    var task = (Task)value;
    _tasks.ReplaceOne(task => task.Id == id, task);
}
public void Remove(string id) => _tasks.DeleteOne(task => task.Id == id);
public void Remove(Task value)
{
    var taskToDelete = (Task)value;
    _tasks.DeleteOne(task => task.Id == taskToDelete.Id);
}**/