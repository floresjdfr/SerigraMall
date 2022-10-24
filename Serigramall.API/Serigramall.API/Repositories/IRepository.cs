using Serigramall.API.Models;
using System.Collections.Generic;

namespace Serigramall.API.Repositories
{
    public interface IRepository<T>
    {
        public IEnumerable<T> Get();
        public IEnumerable<T> GetByProvider(string providerId);
        public T Get(string id);
        public T Create(T newItem);
        public void Update(string id, T updatedValue);
        public void Update(T updatedValue);
        public void Remove(string id);
        public void Remove(T itemToDelete);
    }
}