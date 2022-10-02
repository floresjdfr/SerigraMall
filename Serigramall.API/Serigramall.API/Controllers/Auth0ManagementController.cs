using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Serigramall.API.Helpers.Auth0;
using System.Threading.Tasks;

namespace Serigramall.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Auth0ManagementController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public Auth0ManagementController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("GetToken")]
        public async Task<IActionResult> GetToken()
        {
            var authentication = new ManagementAPI(_configuration);
            var token = await authentication.GetManagementAPITokenAsync();

            if (token != null)
                return Ok(token);
            return BadRequest();
        }
        [HttpGet("ListUsers")]
        public async Task<IActionResult> ListUsers()
        {
            var authentication = new ManagementAPI(_configuration);
            var users = await authentication.ListUsers();

            if (users != null)
                return Ok(users);
            return BadRequest();
        }
    }
}
