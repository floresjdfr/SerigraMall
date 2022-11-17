
using MongoDB.Driver;
using Serigramall.API.Models;
using Serigramall.API.Settings;
using System;
using System.Collections.Generic;
using System.IO.Packaging;

namespace Serigramall.API.Repositories
{
    public class OrderRepository : IRepository<Order>   
    {
        private readonly IMongoCollection<Order> _items;

        public OrderRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _items = database.GetCollection<Order>("Orders");
        }

        public Order Create(Order item)
        {
            _items.InsertOne(item);
            return item;
        }
        public IEnumerable<Order> Get() => _items.Find(item => true).ToList();

        public Order Get(string id) => _items.Find(item => item.Id == id).FirstOrDefault();

        public IEnumerable<Order> GetByProductType(string productType)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Order> GetByProvider(string providerId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Order> GetByUserId(string userId) => _items.Find(item => item.Client == userId).ToList();

        public void Remove(string id) => _items.DeleteOne(item => item.Id == id);

        public void Remove(Order itemToDelete)
        {
            throw new System.NotImplementedException();
        }

        public void Update(string id, Order updatedValue)
        {
            var task = (Order)updatedValue;
            _items.ReplaceOne(task => task.Id == id, task);
        }
        public void Update(Order updatedValue)
        {
            var updatedItem = (Order)updatedValue;
            var filter = Builders<Order>.Filter.Where(item => item.Id == updatedItem.Id);
            var update = Builders<Order>.Update
                .Set(item => item.Products, updatedItem.Products)
                .Set(item => item.TotalPrice, updatedItem.TotalPrice)
                .Set(item => item.OrderState, updatedItem.OrderState);
            var options = new FindOneAndUpdateOptions<Order>();
            _items.FindOneAndUpdate(filter, update, options);
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