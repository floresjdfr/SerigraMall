using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Serigramall.API.Helpers.Auth0;
using System.Threading.Tasks;
using System;
using Serigramall.API.Models;
using Auth0.ManagementApi.Models;
using User = Serigramall.API.Models.User;
using Microsoft.AspNetCore.Authorization;

namespace Serigramall.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserManagementController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserManagementController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [Authorize]
        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateUser(string id, User updatedUser)
        {
            try
            {
                var authentication = new ManagementAPI(_configuration);

                var userType = GetUsertype(id);
                if (userType == UserType.Social)
                    updatedUser.email = null;

                var response = await authentication.UpdateUser(id, updatedUser);

                if (response != null)
                    return Ok(response);
                return BadRequest();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
                return BadRequest();
            }
        }


        private UserType GetUsertype(string userId)
        {
            var userType = userId.Split("|");
            return userType[0] == "auth0" ? UserType.Database : UserType.Social;
        }

        private enum UserType
        {
            Database, Social
        }
    }
}
