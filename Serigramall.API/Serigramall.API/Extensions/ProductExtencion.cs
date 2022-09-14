using Serigramall.API.DTOs;
using Serigramall.API.Models;

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
                Date = item.Date
                //State = item.State.ToString()
            };
        }
        public static Product toProduct(this ProductDto item)
        {
            return null;
        }

        //public static Task toTask(this TaskDTO taskDTO)
        //{
        //    var task = new Task
        //    {
        //        Id = taskDTO.TaskId,
        //        Description = taskDTO.TaskDescription,
        //        Date = taskDTO.TaskDate
        //    };
        //    switch (taskDTO.TaskState.ToUpper())
        //    {
        //        case "ACTIVE":
        //            {
        //                task.State = State.ACTIVE;
        //                break;
        //            }
        //        case "COMPLETED":
        //            {
        //                task.State = State.COMPLETED;
        //                break;
        //            }
        //        case "DELETED":
        //            {
        //                task.State = State.DELETED;
        //                break;
        //            }
        //    }
        //    return task;
        //}
    }
}
