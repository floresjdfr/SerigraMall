using Serigramall.API.DTOs;
using Serigramall.API.Models;
using System.IO;
using System.Security.Policy;

namespace Serigramall.API.Extensions
{
    public static class ProductOrderExtencion
    {
        public static OrderDto toDTO(this Order item)
        {            
            return new OrderDto
            {
                Id = item.Id,
                RegistryDate = item.RegistryDate
            };
        }
        public static Order toOrder(this OrderDto item)
        {
            return new Order
            {
                Id = item.Id,
                RegistryDate = item.RegistryDate
            };
        }
        public static ProductBoughtDto toDTO(this ProductBought item)
        {
            return new ProductBoughtDto
            {
                Id = item.Id
            };
        }
        public static ProductBought toProductBought(this ProductBoughtDto item)
        {
            return new ProductBought
            {
                Id = item.Id
            };
        }

        internal static OrderState castInvetaryEnum(string itemState)
        {             
            switch (itemState.ToUpper())
            {
                case "DEFAULT":                    
                        return OrderState.DEFAULT;                    
                case "NEW":                    
                        return OrderState.NEW;                    
                case "ACTIVE":                    
                        return OrderState.ACTIVE;                    
                case "ONGOING":
                    return OrderState.ONGOING;
                case "DONE":
                    return OrderState.DONE;
            }
            return OrderState.DEFAULT;
        }
    }
}
