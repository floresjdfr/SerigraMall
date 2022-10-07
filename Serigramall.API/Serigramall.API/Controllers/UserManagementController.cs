using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Serigramall.API.Helpers.Auth0;
using System.Threading.Tasks;
using System;
using Serigramall.API.Models;

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

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var authentication = new ManagementAPI(_configuration);
            var users = await authentication.ListUsers();

            if (users != null)
                return Ok(users);
            return BadRequest();
        }

        [HttpPatch("{userId}")]
        public async Task<IActionResult> UpdateUser(string userId, User updatedUser)
        {
            try
            {
                var authentication = new ManagementAPI(_configuration);
                var response = await authentication.UpdateUser(userId, updatedUser);

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
    }
}
