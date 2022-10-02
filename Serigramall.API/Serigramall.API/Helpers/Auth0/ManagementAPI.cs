using Microsoft.AspNetCore.Server.IIS.Core;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Serigramall.API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics.Eventing.Reader;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Serigramall.API.Helpers.Auth0
{
    public class ManagementAPI
    {
        private readonly IConfiguration _configuration;
        private string domain;
        private string clientId;
        private string clientSecret;
        private string audience;

        public string BASE_URL { private set; get; }
        public ManagementAPI(IConfiguration configuration)
        {
            _configuration = configuration;
            domain = _configuration["Auth0:Domain"];
            clientId = _configuration["Auth0:ManagementClientId"];
            clientSecret = _configuration["Auth0:ManagementClientSecret"];
            audience = _configuration["Auth0:ManagementAudience"];
            BASE_URL = $"https://{domain}";
        }
        public async Task<Token> GetManagementAPITokenAsync()
        {
            try
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri($"https://{domain}");
                    var response = await client.PostAsync("oauth/token", new FormUrlEncodedContent(
                        new Dictionary<string, string>
                        {
                            { "grant_type", "client_credentials" },
                            { "client_id", clientId },
                            { "client_secret", clientSecret},
                            { "audience", audience}
                        }
                    ));

                    var content = await response.Content.ReadAsStringAsync();
                    var token = JsonConvert.DeserializeObject<Token>(content);
                    return token;
                }
            }
            catch
            {
                return null;
            }
        }

        public async Task<List<User>> ListUsers()
        {
            try
            {
                using (var httpClient = new HttpClient())
                {
                    var token = await GetManagementAPITokenAsync();
                    if (token == null) throw new NoNullAllowedException("Unable to get the access token");

                    var authenticationHeader = "Bearer " + token.access_token;

                    httpClient.BaseAddress = new Uri(BASE_URL);
                    httpClient.DefaultRequestHeaders.Add("Authorization", authenticationHeader);

                    var response = await httpClient.GetAsync("api/v2/users");

                    var content = await response.Content.ReadAsStringAsync();
                    var users = JsonConvert.DeserializeObject<List<User>>(content);
                    return users;
                }
            }
            catch
            {
                return null;
            }

        }
    }
}
