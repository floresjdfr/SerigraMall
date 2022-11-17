using Serigramall.API.DTOs;
using Serigramall.API.Models;
using System.IO;
using System.Security.Policy;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http.Features;

namespace Serigramall.API.Extensions
{
    public static class ProductOrderExtencion
    {
        public static OrderDto toDTO(this Order item)
        {            
            return new OrderDto
            {
                Id = item.Id,
                Client = item.Client == null ? "" : item.Client,
                Products = item.Products == null ? new List<ProductBoughtDto>() : castProductBoughtToDto(item.Products),
                TotalPrice = item.TotalPrice == null ? "" : item.TotalPrice,
                LastCardDigits = item.LastCardDigits == null ? "" : item.LastCardDigits,
                OrderDate = item.OrderDate == null ? System.DateTime.Now : item.OrderDate,
                OrderState = item.OrderState
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
                Client = item.Client == null ? "" : item.Client,
                Products = item.Products == null ? new List<ProductBought>() : castToProductBought(item.Products),
                TotalPrice = item.TotalPrice == null ? "" : item.TotalPrice,
                LastCardDigits = item.LastCardDigits,
                OrderDate = item.OrderDate == null ? System.DateTime.Now : item.OrderDate,
                OrderState = item.OrderState,
            };
        }
        public static ProductBoughtDto toDTO(this ProductBought item)
        {
            return new ProductBoughtDto
            {
                Id = item.Id,
                ProductName = item.ProductName,
                Description = item.Description,
                Image = item.Image,
                Quantity = item.Quantity,
                BasePrice = item.BasePrice,
                BaseTax = item.BaseTax,
                ProductState = item.ProductState,
                ProviderId = item.ProviderId,
                Serigraphy = item.Serigraphy != null ? item.Serigraphy.toDTO() : null
            };
        }
        public static ProductBought toProductBought(this ProductBoughtDto item)
        {
            return new ProductBought
            {
                Id = item.Id,
                ProductName = item.ProductName,
                Description = item.Description,
                Image = item.Image,
                Quantity = item.Quantity,
                BasePrice = item.BasePrice,
                BaseTax = item.BaseTax,
                ProductState = item.ProductState,
                ProviderId= item.ProviderId,
                Serigraphy = item.Serigraphy != null ? item.Serigraphy.toProductBought() : null
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
