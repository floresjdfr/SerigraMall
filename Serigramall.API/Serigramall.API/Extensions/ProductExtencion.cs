using Serigramall.API.DTOs;
using Serigramall.API.Models;
using System.IO;

namespace Serigramall.API.Extensions
{
    public static class ProductExtencion
    {
        public static ProductDto toDTO(this Product item)
        {
            
            return new ProductDto
            {
                Id = item.Id,
                Description = item.Description,
                RegistryDate = item.RegistryDate,
                ProductState = castInvetaryEnum(item.ProductState),
                Image = item.Image,
                BasePrice = item.BasePrice,
                BaseTax = item.BaseTax,
                ProductName = item.ProductName,
                ProductType = item.ProductType,
                ProviderID = item.Provider,
                Costumizations = null
            };
        }
        public static Product toProduct(this ProductDto item)
        {
            //byte[] binaryContent = File.ReadAllBytes("C:/Users/boyro/OneDrive/Documentos/Euro Truck Simulator 2/screenshot/ets2_00059.png");
            return new Product
            {
                Id = item.Id,
                Description = item.Description,
                RegistryDate = item.RegistryDate,
                ProductState = item.ProductState.ToString(),                
                Image = item.Image,
                BasePrice =item.BasePrice,
                BaseTax = item.BaseTax,
                ProductName = item.ProductName,
                ProductType = item.ProductType,
                Provider = item.ProviderID, 
                Costumizations =null
            };
        }

        internal static InventaryState castInvetaryEnum(string itemState)
        {

            switch (itemState.ToUpper())
            {
                case "ACTIVE":
                    {
                        return InventaryState.ACTIVE;
                    }
                case "SOLDOUT":
                    {
                        return InventaryState.SOLDOUT;
                    }
                case "DESCONTINUED":
                    {
                        return InventaryState.DESCONTINUED;
                    }
            }
            return InventaryState.DEFAULT;
        }
    }
}
