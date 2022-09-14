
using MongoDB.Driver;
using Serigramall.API.Models;
using Serigramall.API.Settings;
using System;
using System.Collections.Generic;

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


        //public IEnumerable<Product> Get()
        //{
        //    var products = new List<Product>();
        //    products.Add(new Product { Id = "00", Date = DateTime.Now, Description = "JNFOJNFOJANOJI", State = InventaryState.ACTIVE });
        //    products.Add(new Product { Id = "01", Date = DateTime.Now, Description = "LKDJLKJFLKJFK", State = InventaryState.ACTIVE });


        //    return products;
        //}
        public IEnumerable<Product> Get() => _items.Find(item => true).ToList();

        public Product Get(string id) => _items.Find(item => item.Id == id).FirstOrDefault();

        public void Remove(string id)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(Product itemToDelete)
        {
            throw new System.NotImplementedException();
        }

        public void Update(string id, Product updatedValue)
        {
            throw new System.NotImplementedException();
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