using Auth0.ManagementApi.Models;
using Microsoft.Extensions.Configuration;

namespace Serigramall.API.Settings.Auth0
{
    public class ManagementClientApi : IManagementApiConfig
    {
        private readonly IConfiguration _configuration;
        public ManagementClientApi(IConfiguration configuration)
        {
            _configuration = configuration;
            domain = _configuration["Auth0:Client:Domain"];
            clientId = _configuration["Auth0:Client:ManagementClientId"];
            clientSecret = _configuration["Auth0:Client:ManagementClientSecret"];
            audience = _configuration["Auth0:Client:ManagementAudience"];
            BASE_URL = $"https://{domain}";
        }
    }
}
