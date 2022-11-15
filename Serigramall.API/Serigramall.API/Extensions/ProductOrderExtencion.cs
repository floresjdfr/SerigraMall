using Serigramall.API.DTOs;
using Serigramall.API.Models;
using System.IO;
using System.Security.Policy;
using System.Collections.Generic;

namespace Serigramall.API.Extensions
{
    public static class ProductOrderExtencion
    {
        public static OrderDto toDTO(this Order item)
        {            
            return new OrderDto
            {
                Id = item.Id,
                RegistryDate = item.RegistryDate == null ? System.DateTime.Now : item.RegistryDate,
                Provider = item.Provider == null ? "":item.Provider,
                Client = item.Client == null ? "" : item.Client,
                TotalPrice = item.TotalPrice == null ? "" : item.TotalPrice,
                OrderState = item.OrderState,
                Products = item.Products == null ? new List<ProductBoughtDto>() : castProductBoughtToDto(item.Products),

            };
        }
        public static List<ProductBoughtDto> castProductBoughtToDto(List<ProductBought> productBoughts)
        {
            var items = new List<ProductBoughtDto>();
            
                foreach (var item in productBoughts)
                {
                    items.Add(toDTO(item));
                }
            return items;
        }
        public static List<ProductBought> castToProductBought(List<ProductBoughtDto> productBoughts)
        {
            var items = new List<ProductBought>();

            foreach (var item in productBoughts)
            {
                items.Add(toProductBought(item));
            }
            return items;
        }
        public static Order toOrder(this OrderDto item)
        {
            return new Order
            {
                Id = item.Id,
                RegistryDate = item.RegistryDate == null ? System.DateTime.Now : item.RegistryDate,
                Provider = item.Provider == null ? "":item.Provider,
                Client = item.Client == null ? "" : item.Client,
                TotalPrice = item.TotalPrice == null ? "" : item.TotalPrice,
                OrderState = item.OrderState,
                Products = item.Products == null ? new List<ProductBought>() : castToProductBought(item.Products),
            };
        }
        public static ProductBoughtDto toDTO(this ProductBought item)
        {
            return new ProductBoughtDto
            {
                Id = item.Id,
                Quantity = item.Quantity,
                ProductID = item.ProductID,
                SerigraphyID = item.ProductID
            };
        }
        public static ProductBought toProductBought(this ProductBoughtDto item)
        {
            return new ProductBought
            {
                Id = item.Id,
                Quantity = item.Quantity,
                ProductID = item.ProductID,
                SerigraphyID = item.ProductID
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
