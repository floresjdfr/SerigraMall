
using Auth0.AuthenticationApi;
using Auth0.AuthenticationApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using Serigramall.API.Helpers.Auth0;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Serigramall.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {


        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {
            return Ok(new { message = "Authorized user" });
        }
    }
}
