using Microsoft.Extensions.Configuration;

namespace Serigramall.API.Settings.Auth0
{
    public class ManagementProviderApi : IManagementApiConfig
    {
        private readonly IConfiguration _configuration;
        public ManagementProviderApi(IConfiguration configuration)
        {
            _configuration = configuration;
            domain = _configuration["Auth0:Provider:Domain"];
            clientId = _configuration["Auth0:Provider:ManagementClientId"];
            clientSecret = _configuration["Auth0:Provider:ManagementClientSecret"];
            audience = _configuration["Auth0:Provider:ManagementAudience"];
            BASE_URL = $"https://{domain}";
        }
    }
}
