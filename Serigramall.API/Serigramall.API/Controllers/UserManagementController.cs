using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Serigramall.API.Helpers.Auth0;
using System.Threading.Tasks;
using System;
using Serigramall.API.Models;
using User = Serigramall.API.Models.User;
using Microsoft.AspNetCore.Authorization;
using System.Linq;
using System.Collections.Generic;

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

        //[Authorize]
        [HttpPatch("{id}/{auth0Provider}")]
        public async Task<IActionResult> UpdateUser(string id, string auth0Provider, User updatedUser)
        {
            User response = null;
            try
            {
                var selectedAuth0Provider = auth0Provider == "PROVIDER" ? Auth0Provider.PROVIDERS : Auth0Provider.CLIENTS;
                var authentication = new ManagementAPI(_configuration, selectedAuth0Provider);
                var userInDb = (await authentication.GetUser(id)).ElementAt(0);

                //Remove email from being updated if it's a social profile
                var userType = GetUsertype(id);
                if (userType == UserType.Social)
                    updatedUser.email = null;

                //Remove provider
                if (userInDb.logins_count != "1")
                    updatedUser.user_metadata.provider = null;

                response = await authentication.UpdateUser(id, updatedUser);
                await AssignRoles(id);

                if (response != null)
                    return Ok(response);
                return BadRequest();

            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
                if (response != null)
                    return BadRequest("An error ocurred while assiging roles");
                return BadRequest("An error ocurred while updating the user");
            }
        }

        [HttpGet("{id?}")]
        public async Task<IActionResult> GetUsers(string id)
        {
            try
            {
                var authentication = new ManagementAPI(_configuration);

                var response = await authentication.GetUser(id);

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

        private async Task AssignRoles(string userId)
        {
            var authentication = new ManagementAPI(_configuration);
            var rolesAvailable = new Dictionary<string, string>
                {
                    {"PROVIDER_PRODUCTS", "rol_SGk01p4OiuzjDkM7"},
                    {"PROVIDER_SERIGRAPHY", "rol_jC1anhAm48HQf25F"},
                    {"CLIENT", "pending" }
                };

            var userFound = (await authentication.GetUser(userId)).ElementAt(0);
            if (userFound.logins_count == "1")
            {
                var rolesToAssign = new Roles()
                {
                    roles = new List<string>()
                };

                //The role is going to be assigned depending on what auth0ProviderIdentifier the user has
                switch (userFound.user_metadata.auth0ProviderItentifier)
                {
                    case (int)Auth0Provider.PROVIDERS:
                        {
                            if (userFound.user_metadata.provider == "1")
                                rolesToAssign.roles.Add(rolesAvailable["PROVIDER_SERIGRAPHY"]);
                            if (userFound.user_metadata.provider == "2")
                                rolesToAssign.roles.Add(rolesAvailable["PROVIDER_PRODUCTS"]);

                            break;
                        }
                    case (int)Auth0Provider.CLIENTS:
                        {
                            rolesToAssign.roles.Add(rolesAvailable["CLIENT"]);
                            break;
                        }
                }

                await authentication.AssignRole(userFound, rolesToAssign);
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
